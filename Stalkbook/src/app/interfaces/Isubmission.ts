export interface Isubmission {
  _id:{type:{subid:Number, site:String}, unique:true},
  handle:String,
  lang:String,
  verdict: String,
  prob_id:String,
  exet: Number,
  mem: Number,
  sub_time: String
}
