import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../environments/environment';
import jwt_decode from 'jwt-decode';

import User from './User';
import RegisterUser from './RegisterUser';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  getToken(): string {
    return localStorage.getItem('access_token')!;
  }

  readToken(): User | null  {
    const token = localStorage.getItem('access_token');

    if (token) {
      return jwt_decode(token);
    } else {
      return null;
    }
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('access_token');

    if(token) {
      return true;
    }
    else {
      return false;
    }
  }

  login(user : User): Observable<any> {
    return this.http.post<any>(environment.userAPIBase + '/login', user);
  }

  logout() {
    localStorage.removeItem('access_token');
  }

  register(registerUser : RegisterUser): Observable<any> {
    return this.http.post<any>(environment.userAPIBase + '/register', registerUser);
  }
}
