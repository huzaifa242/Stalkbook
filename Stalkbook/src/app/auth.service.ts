import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';
import { Router } from '@angular/router';
import {Istalkbook_user} from "./interfaces/Istalkbook_user";
import {LoadprofileService} from "./loadprofile.service";

export interface UserDetails {
  _id: string;
  exp: number;
  iat: number;
}

interface TokenResponse {
  token: string;
  user: string;
}

export interface TokenPayload {
  user: string;
  password: string;
}

@Injectable()
export class AuthService {
  private token: string;
  public userid:string;
  constructor(private http: HttpClient, private router: Router,private lp: LoadprofileService) {}

  private saveToken(token: string): void {
    localStorage.setItem('mean-token', token);
    this.token = token;
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('mean-token');
    }
    return this.token;
  }

  public getUserDetails(): UserDetails {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  public isLoggedIn(): boolean {
    const user = this.getUserDetails();
    if (user) {
      return user.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }

  private request(method: 'post'|'get', type: 'login'|'profile', user?: TokenPayload): Observable<any> {
    let base;

    if (method === 'post') {
      base = this.http.post(`/api/${type}`, user);
    } else {
      base = this.http.get(`/api/${type}`, { headers: { Authorization: `Bearer ${this.getToken()}` }});
    }

    const request = base.pipe(
      map(async (data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token);
          this.userid= data.user;
          await this.lp.getprofile(this.userid);
          //await this.lp.getcodeforcessubmission();
          await this.lp.getcodeforces(this.userid);
          console.log(this.lp.suser);
          console.log(this.lp.codeforces_submission);
          console.log(this.lp.codeforces);
        }
        return data;
      })
    );

    return request;
  }

  public register(user: Istalkbook_user){
    return  this.http.post<TokenPayload>('/api/register', user);
  }

  public login(user: TokenPayload): Observable<any> {
    return this.request('post', 'login', user);
  }

  public profile(): Observable<any> {
    return this.request('get', 'profile');
  }
  public unamecheck(uname){
    return this.http.get<boolean>('/api/checkuname?uname='+uname);
  }
  public logout(): void {
    this.token = '';
    this.userid='';
    window.localStorage.removeItem('mean-token');
    this.router.navigate(['home']);
  }
}
