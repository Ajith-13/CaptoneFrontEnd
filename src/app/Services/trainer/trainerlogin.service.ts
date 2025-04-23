import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

interface AuthResponse {
  token: string;
}

interface LoginRequest {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class TrainerloginService {

  private apiUrl = 'http://localhost:7266/api/Auth'; // Adjust the URL as per your backend API
  private tokenKey = 'jwt_token'; // Key used to store token

  constructor(private http: HttpClient) { }

  login(credentials: LoginRequest): Observable<AuthResponse> {
    console.log(credentials);
    return this.http.post<AuthResponse>(
      `${this.apiUrl}/login`, // Adjust the endpoint based on your API
      credentials,
      {
        withCredentials: true // Send credentials (cookies) along with the request
      }).pipe(
        tap((response) => this.saveToken(response.token)) // Save the token upon successful login
    );
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey) || sessionStorage.getItem(this.tokenKey);
  }

  saveToken(token: string): void {
    // Store the token in localStorage for persistence across sessions
    localStorage.setItem(this.tokenKey, token);
    // Alternatively, use sessionStorage for session-based storage:
    // sessionStorage.setItem(this.tokenKey, token);
  }

  removeToken(): void {
    // Remove the token from both storage options
    localStorage.removeItem(this.tokenKey);
    sessionStorage.removeItem(this.tokenKey);
  }

  isAuthenticated(): boolean {
    // Check if the token exists in either storage (local or session)
    return !!this.getToken();
  }
}
