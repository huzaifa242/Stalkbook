const mongoose = require('mongoose');

const problemschema = new mongoose.Schema({
    _id:{type:{prob_id:String, site:String}, unique:true},
    ac:Number,
    pac:Number,
    ce:Number,
    mle:Number,
    tle:Number,
    wa:Number,
    re:Number,
    accuracy:Number,
    contest:String,
    recom:Number
});

const problem = mongoose.model('problem', problemschema);

module.exports = problem;