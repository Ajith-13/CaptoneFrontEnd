import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  router=inject(Router)
  onLogin(){
    
    this.router.navigateByUrl('login')
  }
  onRegister(){
    this.router.navigateByUrl('register')
  }
  admin(){
    this.router.navigateByUrl('administrator')
  }
  trainerlogin(){
    this.router.navigateByUrl('trainer-signin') 
  }
}
