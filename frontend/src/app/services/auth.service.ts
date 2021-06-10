import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  sigin(user: object) {
    return this.http.post(`${this.URL}/user/singin`, user);
  }

  isAuth(): boolean {
    const token = localStorage.getItem('sesTokenAE');
    if (!localStorage.getItem('sesTokenAE')) {
      false;
    } else {
      true;
    }
  }
}
