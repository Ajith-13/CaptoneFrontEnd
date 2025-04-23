import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable, tap } from 'rxjs';

interface AuthResponse {
  token: string;
}
interface LoginRequest {
  email: string;
  password: string;
}

interface DecodedToken {
  name?: string;
  email?: string;
  role?: string;
  exp: number; // expiry timestamp
}

@Injectable({
  providedIn: 'root'
})
export class AdminloginService {
  private apiUrl = 'http://localhost:7266/api/Auth';
  private tokenKey = 'jwt_token';

  constructor(private http: HttpClient) { }
  login(credentials: LoginRequest): Observable<AuthResponse> {
    console.log(credentials);
    return this.http.post<AuthResponse>(
      `${this.apiUrl}/admin-login`, 
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
    const token = this.getToken();
    if (!token) return false;

    try {
      const decoded: DecodedToken = jwtDecode(token);
      return decoded.exp > Date.now() / 1000; // compare current time to expiry
    } catch (err) {
      return false;
    }
  }
  getAdminName(): string | null {
    const token = this.getToken();
    if (!token) return null;

    try {
      const decoded: DecodedToken = jwtDecode(token);
      return decoded.name || decoded.email || null;
    } catch (err) {
      return null;
    }
  }
}
