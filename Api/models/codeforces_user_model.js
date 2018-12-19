const mongoose = require('mongoose');

const codeforces_userschema = new mongoose.Schema({
    _id: String,
    handle:String,
    cur_rating:Number,
    all_rating: [],
    maxrating:Number,
    contest: [],
    ac:Number,
    pac:Number,
    ce:Number,
    mle:Number,
    tle:Number,
    wa:Number,
    re:Number
});

const codeforces_user = mongoose.model('codeforces_user', codeforces_userschema);

module.exports = codeforces_user;