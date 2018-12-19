/*========================================================*\
|                        ALL INIT                          |
\*========================================================*/


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
exports.profile= async(req,res) =>{
    const user= await user_stalkbook.findOne({_id:req.query.user});
    //console.log(user);
    res.json(user);
}
exports.checkuname =async(req,res) =>{
    const user=await user_stalkbook.findOne({_id:req.query.uname});
    if(user){
        res.json({"val":true});
    }
    else{
        res.json({"val":false});
    }
}