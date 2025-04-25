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
import { UserlandingPageComponent } from './Pages/user/userlanding-page/userlanding-page.component';
import { TrainerapproveComponent } from './Pages/administrator/trainerapprove/trainerapprove.component';
import { TrainerviewComponent } from './Pages/administrator/trainerview/trainerview.component';
import { ContactComponent } from './Pages/homepage/navigationpage/contact/contact.component';
import { AboutUsComponent } from './Pages/homepage/navigationpage/about-us/about-us.component';
import { TrainerlandingpageComponent } from './Pages/trainer/trainerlandingpage/trainerlandingpage.component';
import { authGuard } from './guards/auth-guard.guard';


export const routes: Routes = [
    {
      path: '',
      redirectTo: 'welcome',
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
      path: 'administrator',
      component: AdministratorloginComponent
    },
    { 
      path: 'trainer-signin',
      component: TrainersigninComponent
    },
    {
      path: 'admin-landingpage',
      component: LandingPageComponent,
      canActivate: [authGuard],  // Use the authGuard here for admins
      data: { role: 'ADMIN' }  // This route is for Admin users only
    },
    {
      path: 'admin-trainer-approve',
      component: TrainerapproveComponent,
      canActivate: [authGuard],  // Use the authGuard here for admins
      data: { role: 'ADMIN' }  // This route is for Admin users only
    },
    {
      path: 'user-landingpage',
      component: UserlandingPageComponent,
      canActivate: [authGuard],  // Use the authGuard here for users
      data: { role: 'USER' }  // This route is for User role only
    },
    { 
      path: 'trainer-details/:id', 
      component: TrainerviewComponent,
      canActivate:[authGuard],
      data:{role:'ADMIN'}
    },
    { 
      path: 'contact', 
      component: ContactComponent
    },
    { 
      path: 'aboutus', 
      component: AboutUsComponent
    },
    { 
      path: 'trainerlandingpage', 
      component: TrainerlandingpageComponent,
      canActivate: [authGuard],  // Use the authGuard here for trainers
      data: { role: 'TRAINER' }  // This route is for Trainer users only
    }
  ];
