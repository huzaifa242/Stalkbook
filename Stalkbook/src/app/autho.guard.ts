import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthoGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {}

  canActivate() {
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(['home']);
      return false;
    }
    return true;
  }
}
