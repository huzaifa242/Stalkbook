/*========================================================*\
|                        ALL INIT                          |
\*========================================================*/
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
/*========================================================*\
|                        ALL MODELS                        |
\*========================================================*/
const user_stalkbook = require('../models/stalkbook_user_model')


/*========================================================*\
|                      ALL CONTROLLERS                     |
\*========================================================*/
const codeforces_scraper = require('../controller/codeforces_user_scrapper');


/*========================================================*\
|                      Function Calls                      |
\*========================================================*/
exports.stalkbook = async(req,res)=>{
    let x=new user_stalkbook();
    x.fname=req.body.fname;
    x.lname=req.body.lname;
    x._id=req.body._id;
    x.email=req.body.email;
    x.institute=req.body.institute;
    x.country=req.body.country;
    x.codeforces_handle=req.body.codeforces_handle;
    setPassword(req.body.password,x);
    const user= new user_stalkbook(x);
    const result = await user.save();
    await codeforces_scraper.scrap(x._id);
    let token;
    token = await generateJwt();
    res.status(200);
    res.json({
        "token" : token
    });
};
let setPassword = function(password, x){
    x.salt = crypto.randomBytes(16).toString('hex');
    x.hash = crypto.pbkdf2Sync(password, x.salt, 1000, 64, 'sha512').toString('hex');
};
let generateJwt = function() {
    let expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);

    return jwt.sign({
        _id: this._id,
        exp: parseInt(expiry.getTime() / 1000),
    }, "MY_SECRET");
};
//await this.auth.unamecheck(uname).subscribe(data => this.val=data['val']);
