import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { AuthService } from '../../../Services/auth.service';
import { TrainerloginService } from '../../../Services/trainer/trainerlogin.service';

@Component({
  selector: 'app-trainersignin',
  standalone: true,
  imports: [FormsModule,NavbarComponent],
  templateUrl: './trainersignin.component.html',
  styleUrl: './trainersignin.component.css'
})
export class TrainersigninComponent {
  formData = {
    email: '',
    password: ''
  };
  errorMessage = ''; // Used to display error messages

  constructor(private trainerLoginService: TrainerloginService, private router: Router) {}

  // Method to handle trainer login
  onTrainerLogin() {
    const loginPayload = {
      email: this.formData.email,
      password: this.formData.password
    };
    console.log(this.formData);

    // Call the login method from TrainerloginService
    this.trainerLoginService.login(loginPayload).subscribe({
      next: (response) => {
        console.log('Login successful', response);
        alert('Login successful');
        this.router.navigateByUrl('/trainer-dashboard'); // Redirect to trainer dashboard after successful login
      },
      error: (err) => {
        console.error('Login failed', err);
        if (err.error && err.error.message) { 
          // Display custom error message from backend (e.g., "Trainer approval pending")
          this.showAlert('Failed', err.error.message);
        } else {
          // Show a generic error message for unexpected issues
          this.showAlert('Failed', 'An unexpected error occurred. Please try again.');
        }
      }
    });
  }

  // Method to navigate to the trainer registration page
  trainerRegister() {
    this.router.navigateByUrl('trainer-signup');
  }

  // Method to show alerts on the frontend
  showAlert(title: string, message: string) {
    document.getElementById('alertTitle')!.innerText = title;
    document.getElementById('alertText')!.innerHTML = message; // Use innerHTML to allow line breaks

    // Show the alert
    const alertElement = document.getElementById('alertMessage')!;
    alertElement.style.display = 'block';

    // Optionally, hide the alert after a few seconds
    setTimeout(() => {
      alertElement.style.display = 'none';
    }, 5000); // Hide after 5 seconds
  }
  trainerPage(){
    this.router.navigateByUrl('Trainermainpage')
  }
}
