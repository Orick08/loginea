import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private URL = 'http://localhost:3000';

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {}

  sigin(user: object) {
    return this.http.post(`${this.URL}/user/singin`, user);
  }

  isAuth(): boolean {
    const token = localStorage.getItem('sesTokenAE') || undefined;
    if (
      !localStorage.getItem('sesTokenAE') ||
      this.jwtHelper.isTokenExpired(token)
    ) {
      return false;
    } else {
      return true;
    }
  }
}
