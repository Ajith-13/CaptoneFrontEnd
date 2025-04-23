import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainersignin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './trainersignin.component.html',
  styleUrl: './trainersignin.component.css'
})
export class TrainersigninComponent {
  router=inject(Router)
  trainerRegister(){
    this.router.navigateByUrl('trainer-signup')
  }
  trainerPage(){
    this.router.navigateByUrl('Trainermainpage')
  }
}
