const mongoose = require('mongoose');

const submissionschema = new mongoose.Schema({
    _id:{type:{subid:Number, site:String}, unique:true},
    handle:String,
    lang:String,
    verdict: String,
    prob_id:String,
    exet: String,
    mem: String,
    sub_time: String
});

const submission = mongoose.model('submission', submissionschema);

module.exports = submission;