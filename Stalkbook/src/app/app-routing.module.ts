import { NgModule } from '@angular/core';
import {Routes , RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {HomeComponent} from './home/home.component';
import {CustomfriendComponent} from './customfriend/customfriend.component';
import {FriendsComponent} from './friends/friends.component';
import {TrendingproblemsComponent} from './trendingproblems/trendingproblems.component';
import {ProfileComponent} from './profile/profile.component';
import {AuthoGuard} from "./autho.guard";


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent  },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'customfriend', component: CustomfriendComponent },
  { path: 'friends', component: FriendsComponent },
  { path: 'trendingproblems', component: TrendingproblemsComponent },
  { path: 'profile', component: ProfileComponent, canActivate:[AuthoGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
