import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainersignup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './trainersignup.component.html',
  styleUrl: './trainersignup.component.css'
})
export class TrainersignupComponent {
  router=inject(Router)
  onTrainerLogin(){
    
    this.router.navigateByUrl('trainer-signin')
  }
}
