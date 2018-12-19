/*========================================================*\
|                        ALL INIT                          |
\*========================================================*/
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongoose  = require('mongoose')
mongoose.Promise = Promise
const jwt = require('express-jwt');
const auth = jwt({
    secret: 'MY_SECRET',
    userProperty: 'payload'
});
mongoose.connect('mongodb://localhost:27017/stalkbookdb')
    .then(() => console.log("Mongoose Up"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

/*========================================================*\
|                   ALL MODELS                             |
\*========================================================*/
/*const codeforces_user = require("../models/codeforces_user_model");
const user_stalkbook = require('../models/stalkbook_user_model');
const submission = require('../models/submission_model');
const problem = require('../models/problem_model');
*/


/*========================================================*\
|          Local Files for Function Calls                  |
\*========================================================*/
const register = require('./controller/register');
const login = require('./controller/login');
const stalkbookuser = require('./controller/stalkbookuser');
const codeforces_user_scrapper = require('./controller/codeforces_user_scrapper');
/*========================================================*\
|                      ALL ROUTING                         |
\*========================================================*/
app.post('/api/register', register.stalkbook)
app.post('/api/login', login.auth)
app.get('/api/checkuname',stalkbookuser.checkuname);
//app.post('/api/codeforces_user_scrapper',codeforces_user_scrapper.scrap)
app.get('/api/fetchprofile',stalkbookuser.profile);
app.get('/api/fetchcodeforces',codeforces_user_scrapper.codeforces);
app.get('/api/fetchcodeforcessubmission',codeforces_user_scrapper.codeforcessubmission);
/*========================================================*\
|                   SERVER LISTENING                       |
\*========================================================*/
app.listen(8081, ()=> console.log("Server Up"))
