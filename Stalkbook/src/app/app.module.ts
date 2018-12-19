import '../polyfills';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Ng2GoogleChartsModule} from 'ng2-google-charts';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import { VideoComponent } from './video/video.component';
import { HomecardComponent } from './homecard/homecard.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {NavjreadService} from './navjread.service';
import {CustomfriendComponent} from './customfriend/customfriend.component';
import {FriendsComponent} from './friends/friends.component';
import { TrendingproblemsComponent } from './trendingproblems/trendingproblems.component';
import {ProfileComponent} from './profile/profile.component';
import {AuthService} from "./auth.service";
import {AuthoGuard} from "./autho.guard";
import {LoadprofileService} from "./loadprofile.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidenavComponent,
    SignupComponent,
    HomeComponent,
    VideoComponent,
    HomecardComponent,
    CustomfriendComponent,
    FriendsComponent,
    TrendingproblemsComponent,
    ProfileComponent
  ],
  imports: [
    CdkTableModule,
    CdkTreeModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    Ng2GoogleChartsModule,
  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent],
  providers: [NavjreadService,AuthService,AuthoGuard,LoadprofileService]
})


export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);

