import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user = {
    email: '',
    password: '',
  };

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  logIn() {
    console.log('Datos ingresados: ', this.user);
    this.authService.sigin(this.user).subscribe((res) => {
      console.log(res);
    });
  }
}
