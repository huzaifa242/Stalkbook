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
|                      Function Calls                      |
\*========================================================*/
exports.auth = async(req,res) =>{
    //console.log("hi--")
    let token;
    //console.log("hi--hi")
    let usr = req.body;
    //console.log(req.body);
    const resp = await user_stalkbook.findOne({_id:usr['user']})
    //console.log(resp)
    if(resp && validPassword(usr['password'],resp)){
        token = generateJwt();
        res.status(200);
        res.json({
            "token" : token,
            "user" : resp._id
        });
    }
};
let validPassword = function(password, rsl) {
    let hash = crypto.pbkdf2Sync(password, rsl.salt, 1000, 64, 'sha512').toString('hex');
    return rsl.hash === hash;
};

let generateJwt = function() {
    let expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);

    return jwt.sign({
        _id: this._id,
        exp: parseInt(expiry.getTime() / 1000),
    }, "MY_SECRET");
};