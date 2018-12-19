import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "./auth.service";
import {Istalkbook_user} from "./interfaces/Istalkbook_user";
import {Icodeforces_user} from "./interfaces/Icodeforces_user"
import {Isubmission} from "./interfaces/Isubmission";
@Injectable({
  providedIn: 'root'
})
export class LoadprofileService {

  public suser:Istalkbook_user;
  public codeforces:Icodeforces_user;
  public codeforces_submission:Isubmission[];
  constructor(private  http:HttpClient) { }

   async getprofile(userid){
     await this.http.get<Istalkbook_user>("/api/fetchprofile?user="+userid).subscribe( data => {
       this.suser={
         _id:data._id,
       country:data.country,
       codeforces_handle:data.codeforces_handle,
       institute:data.institute,
       password:data.password,
       email:data.email,
       fname:data.fname,
       lname:data.lname};
       console.log(this.suser);
     });
     //await this.http.get<Isubmission[]>("/api/fetchcodeforcessubmission?user="+ String(this.suser.codeforces_handle)).subscribe(data => this.codeforces_submission=data);
     //await this.http.get<Icodeforces_user>("/api/fetchcodeforces?user="+userid).subscribe(data => this.codeforces=data);
     console.log(this.suser);
     //console.log(this.codeforces);
     //console.log(this.codeforces_submission);
  }
  async getcodeforcessubmission(){
    //await this.http.get<Istalkbook_user>("/api/fetchprofile?user="+userid).subscribe( data => this.suser=data);
    await this.http.get<Isubmission[]>("/api/fetchcodeforcessubmission?user="+ String(this.suser.codeforces_handle)).subscribe(data => this.codeforces_submission=data);
    //await this.http.get<Icodeforces_user>("/api/fetchcodeforces?user="+userid).subscribe(data => this.codeforces=data);
    //console.log(this.suser);
    //console.log(this.codeforces);
    console.log(this.codeforces_submission);
  }
  async getcodeforces(userid){
    //await this.http.get<Istalkbook_user>("/api/fetchprofile?user="+userid).subscribe( data => this.suser=data);
    //await this.http.get<Isubmission[]>("/api/fetchcodeforcessubmission?user="+ String(this.suser.codeforces_handle)).subscribe(data => this.codeforces_submission=data);
    await this.http.get<Icodeforces_user>("/api/fetchcodeforces?user="+userid).subscribe(data => this.codeforces=data);
    //console.log(this.suser);
    console.log(this.codeforces);
    //console.log(this.codeforces_submission);
  }
}
