import {  Routes } from '@angular/router';
import { UsersigninComponent } from './Pages/user/usersignin/usersignin.component';
import { UsersignupComponent } from './Pages/user/usersignup/usersignup.component';
import { AppComponent } from './app.component';
import { WelcomepageComponent } from './Pages/welcomepage/welcomepage/welcomepage.component';
import { AdministratorloginComponent } from './Pages/administrator/administratorlogin/administratorlogin.component';
import { TrainersigninComponent } from './Pages/trainer/trainersignin/trainersignin.component';
import { TrainersignupComponent } from './Pages/trainer/trainersignup/trainersignup.component';
import { NavigationpageComponent } from './Pages/homepage/navigationpage/navigationpage.component';
import { LandingPageComponent } from './Pages/administrator/landing-page/landing-page.component';
import { adminAuthGuard } from './guards/admin-auth.guard';


export const routes: Routes = [
  {
    path : '',
    redirectTo:'welcome',
    pathMatch: 'full'
},
{ 
  path: 'welcome',
  component: WelcomepageComponent 
},
  { 
    path: 'login',
    component: UsersigninComponent 
  },
  { 
    path: 'register',
     component: UsersignupComponent 
  },
  {
    path: 'administrator',
     component: AdministratorloginComponent
  },
  {
    path: 'trainer-signin',
     component: TrainersigninComponent
  },
  {
    path: 'trainer-signup',
     component: TrainersignupComponent
  },
  {
    path: 'lerner-navigation',
     component: NavigationpageComponent
  },
  {
    path: 'admin-landingpage',
     component: LandingPageComponent,
     canActivate: [adminAuthGuard]

  }
  
];
