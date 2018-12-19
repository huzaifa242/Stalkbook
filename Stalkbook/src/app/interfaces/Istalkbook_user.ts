export interface Istalkbook_user {
  fname:string;
  lname:string;
  _id: { type: String, unique: true };
  password:String;
  email:String;
  codeforces_handle: String;
  institute: String;
  country:String;
}
