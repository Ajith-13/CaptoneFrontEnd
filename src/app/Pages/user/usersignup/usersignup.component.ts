import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usersignup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './usersignup.component.html',
  styleUrl: './usersignup.component.css'
})
export class UsersignupComponent {
  router=inject(Router)
  onuserLogin(){
    
    this.router.navigateByUrl('login')
  }

}
