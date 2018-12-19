import { Component, OnInit } from '@angular/core';
import {Event, Router} from "@angular/router";
import {AuthService, TokenPayload} from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent  {

  credentials: TokenPayload = {
    user: '',
    password: '',
  }

  constructor(private auth: AuthService, private router: Router) { }
  ngOnInit(){
    if(this.auth.isLoggedIn()){
      window.alert("You are already Logged in");
      this.router.navigate(['home']);
    }
  }

   logauth(event) {
    event.preventDefault();
    const target = event.target;
    this.credentials.user = target.querySelector("#username").value;
     this.credentials.password= target.querySelector("#password").value;
     this.auth.login(this.credentials).subscribe(() => {
       this.router.navigateByUrl('/profile');
     },(err)=> {
         window.alert("Invalid Credentials");
     });
     //console.log(usr,pass);
   }
}
