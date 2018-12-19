/*========================================================*\
|                        ALL INIT                          |
\*========================================================*/
const puppeteer = require('puppeteer');
const $ = require('cheerio');
/*========================================================*\
|                        ALL MODELS                        |
\*========================================================*/
const codeforces_user = require("../models/codeforces_user_model");
const user_stalkbook = require('../models/stalkbook_user_model');
const submission = require('../models/submission_model');
const problem = require('../models/problem_model');
/*========================================================*\
|                      Function Calls                      |
\*========================================================*/
let html="";
let brz;
const htmlfetch = async (url) =>{

    await puppeteer.launch({headless:true})
        .then(function(browser) {
            console.log("Browser");
            brz=browser;
            return browser.newPage();
        })
        .then(function(page) {
            console.log("Page");
            return page.goto(url,{waitUntil:'domcontentloaded', timeout: 20000}).then(function() {
                console.log("Url");
                return page.content();
            });
        })
        .then(function(htmlg) {
            console.log("Html");
            html="";
            html=htmlg;
            brz.close();
        })
        .catch(function(err) {
            //handle error
        });
    console.log("going out");
};
function getnewverdictupdate(user, verdict)
{
    if(String(verdict).substr(0,1) === 'A'){
        //prob.ac+=1;
        user.ac=user.ac+1;
    }
    if(String(verdict).substr(0,1) === 'C'){
        //prob.ce+=1;
        user.ce=user.ce +1;
    }
    if(String(verdict).substr(0,1) === 'M'){
        //prob.mle+=1;
        user.mle=user.mle + 1;
    }
    if(String(verdict).substr(0,1) === 'T'){
        //prob.tle+=1;
        user.tle=user.tle + 1;
    }
    if(String(verdict).substr(0,1) === 'P'){
        //prob.pac+=1;
        user.pac= user.pac + 1;
    }
    if(String(verdict).substr(0,1) === 'W'){
        //prob.wa+=1;
        user.wa=user.wa + 1;
    }
    if(String(verdict).substr(0,1) === 'R'){
        //prob.re+=1;
        user.re= user.re + 1;
    }
    //prob.accuracy=Number((Number(prob.ac) + Number(prob.pac)) * Number(100) /(Number(prob.ac) + Number(prob.pac) + Number(prob.ce) + Number(prob.tle) + Number(prob.mle) + Number(prob.wa) + Number(prob.re)));
    //prob.recom =Number((2*Number(prob.ac) + Number(prob.pac)) / Number(100) * (Number(prob.ac) + Number(prob.pac) + Number(prob.ce)*2 + Number(prob.tle) *(1/4) + Number(prob.mle)*(1/5) + Number(prob.wa)*(1/3) + Number(prob.re)*(1/2)));
}
exports.scrap = async (id) =>{
    const resp= await user_stalkbook.findOne({_id:id});
    if(resp) {
        console.log("=============>New REQ<=========");
        let user= new codeforces_user;
        let acc = new Array();
        user._id=resp._id;
        user.handle= resp.codeforces_handle;
        let url = 'https://codeforces.com/profile/' + user.handle;
        html="";
        console.log("doing");
        await htmlfetch(url).then(()=>{
            user.cur_rating=Number($('div.userbox > div.info > ul > li:nth-child(1)',html).children('span').text().substr(0,4));
            user.maxrating=Number($('div.userbox > div.info > ul > li:nth-child(1) > span.smaller > span:nth-child(2)',html).text());
        });
        user.ac=Number(0);
        user.pac=Number(0);
        user.ce=Number(0);
        user.mle=Number(0);
        user.tle=Number(0);
        user.wa=Number(0);
        user.re=Number(0);
        url ='http://codeforces.com/submissions/'+ user.handle + '/page/1000';
        html="";
        let pgcnt=0;
        await htmlfetch(url).then(() =>{
           pgcnt = Number($('span.active > a',html).text());
           console.log($('span.active > a',html).text());
        });
        for(j=1;j<=pgcnt;j++){
            console.log(j);
            url ='http://codeforces.com/submissions/'+ user.handle + '/page/' + String(j);
            html="";
            await htmlfetch(url).then( await async function(){
                await $('#pageContent > div.datatable > div:nth-child(6) > table > tbody > tr',html).each(await async function (i,elem) {
                    //console.log(i);
                    //console.log({elem});
                    let subm = new submission;
                    let prob = new problem;
                    if($('td:nth-child(1) > a',elem).text()!= null) {
                        let ch;
                        ch=String($('td:nth-child(1)', elem).text());
                        subm._id = {subid: Number(ch), site: "Codeforces"};
                        subm.sub_time = $('td:nth-child(2)', elem).text().replace(/\s+/g, ' ');
                        subm.handle = user.handle;
                        subm.prob_id = $('td:nth-child(4) ',elem).find('a').attr('href');
                        let xh=String(subm.prob_id).split('/');
                        //console.log(xh);
                        prob.contest=String(xh[2]);
                        subm.prob_id= String(xh[2] + '-' + xh[4]);
                        prob._id= {prob_id: String(subm.prob_id), site: "Codeforces"};
                        subm.lang = $('td:nth-child(5)', elem).text().replace(/\s+/g, ' ');
                        subm.verdict = $('td:nth-child(6) > span ', elem).text().replace(/\s+/g, ' ');
                        subm.exet = $('td:nth-child(7)', elem).text().replace(/\s+/g, ' ');
                        subm.mem =$('td:nth-child(8)', elem).text().replace(/\s+/g, ' ');
                        prob.ac=Number(0);
                        prob.pac=Number(0);
                        prob.ce=Number(0);
                        prob.mle=Number(0);
                        prob.tle=Number(0);
                        prob.wa=Number(0);
                        prob.re=Number(0);
                        prob.accuracy=Number(0);
                        prob.recom=Number(0);
                        if(subm._id.subid)
                        {
                            //console.log({subm});
                            acc.push(subm);
                            /*let prresp = await problem.findOne({_id:prob._id});
                            //await console.log(prresp);
                            //await console.log(prob._id);
                            if(prresp!= null){
                                prob.ac=prresp.ac;
                                prob.pac=prresp.pac;
                                prob.ce=prresp.ce;
                                prob.mle=prresp.mle;
                                prob.tle=prresp.tle;
                                prob.wa=prresp.wa;
                                prob.re=prresp.re;
                                prob.accuracy=prresp.accuracy;
                                prob.recom=prresp.recom;
                                await getnewverdictupdate(prob,user,subm.verdict);
                                console.log(prob);
                                let result = await problem.findOneAndUpdate({_id:prob._id},prob);
                            }
                            else{
                                console.log(prob);
                                await getnewverdictupdate(prob,user,subm.verdict);
                                let result = await prob.save();
                            }*/
                            await getnewverdictupdate(user,subm.verdict);
                            await subm.save();
                        }
                    }
                });
            });
            //await console.log(j);
        }
        url = 'https://codeforces.com/contests/with/' + user.handle;
        html="";
        await htmlfetch(url).then(() =>{
            $('tbody:nth-child(2) > tr',html).each(function (i,elem) {
                let name = $('td:nth-child(2) > a',elem).text().replace(/\s+/g, ' ');
                let rank = Number($('td:nth-child(3) > a',elem).text().replace(/\s+/g, ' '));
                if(name) {
                    user.contest.push({name, rank});
                    user.all_rating.push(Number($('td:nth-child(6)', elem).text().replace(/\s+/g, ' ')));
                }
            });
        });
        await user.save();
        console.log("done");
        /*console.log("array");
        for(i=0;i<user.contest.length;i++)
            console.log(user.contest[i]);*/
        //res.json({user,acc});
    }
    else{
        console.log("No such User");
    }
};
exports.codeforcessubmission = async (req,res) =>{
    const usr= req.query.user;
    //console.log(req);
    //console.log(usr);
    let acc = new Array();
    const resp= await user_stalkbook.findOne({_id:usr});
    if(resp) {
        let user= new codeforces_user;
        user= await  codeforces_user.findOne({_id: resp.codeforces_handle});
        for(j=1;j!=0;j++){
            console.log(j);x
            url ='http://codeforces.com/submissions/'+ user.handle + '/page/' + String(j);
            html="";
            await htmlfetch(url).then( await async function(){
                await $('#pageContent > div.datatable > div:nth-child(6) > table > tbody > tr',html).each(await async function (i,elem) {
                    //console.log(i);
                    //console.log({elem});
                    let subm = new submission;
                    let prob = new problem;
                    if($('td:nth-child(1) > a',elem).text()!= null) {
                        let ch;
                        ch=String($('td:nth-child(1)', elem).text());
                        subm._id = {subid: Number(ch), site: "Codeforces"};
                        subm.sub_time = $('td:nth-child(2)', elem).text().replace(/\s+/g, ' ');
                        subm.handle = user.handle;
                        subm.prob_id = $('td:nth-child(4) ',elem).find('a').attr('href');
                        let xh=String(subm.prob_id).split('/');
                        //console.log(xh);
                        prob.contest=String(xh[2]);
                        subm.prob_id= String(xh[2] + '-' + xh[4]);
                        prob._id= {prob_id: String(subm.prob_id), site: "Codeforces"};
                        subm.lang = $('td:nth-child(5)', elem).text().replace(/\s+/g, ' ');
                        subm.verdict = $('td:nth-child(6) > span ', elem).text().replace(/\s+/g, ' ');
                        subm.exet = $('td:nth-child(7)', elem).text().replace(/\s+/g, ' ');
                        subm.mem =$('td:nth-child(8)', elem).text().replace(/\s+/g, ' ');
                        if(subm._id.subid)
                        {
                            //console.log({subm});
                            acc.push(subm);
                            let prresp = await submission.findOne({_id:subm._id});
                            //await console.log(prresp);
                            //await console.log(prob._id);
                            /*if(prresp!= null){
                                prob.ac=prresp.ac;
                                prob.pac=prresp.pac;
                                prob.ce=prresp.ce;
                                prob.mle=prresp.mle;
                                prob.tle=prresp.tle;
                                prob.wa=prresp.wa;
                                prob.re=prresp.re;
                                prob.accuracy=prresp.accuracy;
                                prob.recom=prresp.recom;
                                //await getnewverdictupdate(prob,user,subm.verdict);
                                console.log(prob);
                                let result = await problem.findOneAndUpdate({_id:prob._id},prob);
                            }
                            else{
                                console.log(prob);
                                //await getnewverdictupdate(prob,subm.verdict);
                                let result = await prob.save();
                            }*/
                            if(!prresp) {
                                await getnewverdictupdate(user, subm.verdict);
                                await subm.save();
                            }
                            else{
                                j=-1;
                            }
                        }
                    }
                });
            });
        }
        await codeforces_user.findOneAndUpdate({_id: usr},user);
        acc = await submission.find({handle:user.handle});
    }
    res.json(acc);
};
exports.codeforces = async (req,res) =>{
    const usr= req.query.user;
    //console.log(req);
    //console.log(usr);
    const resp= await user_stalkbook.findOne({_id:usr});
    if(resp) {
        const user = await codeforces_user.findOne({handle: resp.codeforces_handle})
        res.json(user);
    }
}