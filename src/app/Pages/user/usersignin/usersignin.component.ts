import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usersignin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './usersignin.component.html',
  styleUrl: './usersignin.component.css'
})
export class UsersigninComponent {
  router=inject(Router)
  onLearnernavigation(){
    
    this.router.navigateByUrl('lerner-navigation')
  }
}
