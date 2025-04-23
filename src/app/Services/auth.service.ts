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
export class AuthService {
  private apiUrl = 'http://localhost:7266/api/Auth';
  private tokenKey = 'jwt_token';

  constructor(private http: HttpClient) { }

  login(credentials: LoginRequest): Observable<AuthResponse> {
    console.log(credentials);
    return this.http.post<AuthResponse>(
      `${this.apiUrl}/login`, 
      credentials,
      {
        withCredentials: true 
      }).pipe(
      tap((response) => this.saveToken(response.token))
    );
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey) || sessionStorage.getItem(this.tokenKey);
  }

  saveToken(token: string): void {
    // Choose where to store the token: localStorage (persistent) or sessionStorage (session-based)
    localStorage.setItem(this.tokenKey, token);
    // sessionStorage.setItem(this.tokenKey, token);
  }

  removeToken(): void {
    localStorage.removeItem(this.tokenKey);
    sessionStorage.removeItem(this.tokenKey);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
