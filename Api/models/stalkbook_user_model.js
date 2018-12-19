const mongoose = require('mongoose');


const stalkbook_userschema = new mongoose.Schema({
    fname:String,
    lname:String,
    _id: { type: String, unique: true },
    email:String,
    codeforces_handle: String,
    institute: String,
    country:String,
    hash: String,
    salt: String
});

const stalkbook_user = mongoose.model('stalkbook_user', stalkbook_userschema);
module.exports = stalkbook_user;