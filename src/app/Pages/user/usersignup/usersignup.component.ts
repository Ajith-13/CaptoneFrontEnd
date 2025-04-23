import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NavbarComponent } from '../../../components/navbar/navbar.component';

@Component({
  selector: 'app-usersignup',
  standalone: true,
  imports: [FormsModule,NavbarComponent],
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.css']  // Corrected styleUrl to styleUrls
})
export class UsersignupComponent {
  private http = inject(HttpClient);
  private router = inject(Router);
  formData = {
    username: '',
    email: '',
    password: ''
  };

  // Show custom alert with dynamic error message
  showErrorAlert(title: string, message: string) {
    const alertBox = document.getElementById('alertMessage') as HTMLElement;
    const alertText = document.getElementById('alertText') as HTMLElement;
    const alertTitle = document.getElementById('alertTitle') as HTMLElement;
  
    alertTitle.innerText = title;
    alertText.innerText = message;
  
    // Show the alert
    alertBox.style.display = 'block';
  
    // Hide the alert after 5 seconds
    setTimeout(() => {
      alertBox.style.display = 'none';
    }, 5000);
  }
  
  showSuccessAlert(title: string, message: string) {
    const alertBox = document.getElementById('alertSuccessMessage') as HTMLElement;
    const alertTitle = document.getElementById('alertSuccessTitle') as HTMLElement;
    const alertText = document.getElementById('alertSuccessText') as HTMLElement;

    alertTitle.innerText = title;
    alertText.innerText = message;

    // Show the alert
    alertBox.style.display = 'block';

    // Hide the alert after 3 seconds
    setTimeout(() => {
      alertBox.style.display = 'none';
    }, 3000);
  }
  onuserRegister() {
    const registerPayload = {
      userName: this.formData.username,
      email: this.formData.email,
      password: this.formData.password
    };

    this.http.post('http://localhost:7266/api/Auth/register/learner', registerPayload, { responseType: 'text' })
      .subscribe({
        next: (response) => {
          console.log(response);
          // You can navigate after successful registration
          this.showSuccessAlert('Registration successful!', 'You are registered successfully! Please log in.');
          setTimeout(() => {
            this.router.navigateByUrl('/login');
          }, 3000);
        },
        error: (err) => {
          console.error('Registration failed', err);

          // Get the error message from the response or default message
          const errorMessage = err?.error || 'An unexpected error occurred. Please try again later.';

          // Show the error message in the custom alert box
          // alert(errorMessage);
          this.showErrorAlert('Failed!', errorMessage);
          console.error('Error details:', err?.error);
        }
      });
  }
}
