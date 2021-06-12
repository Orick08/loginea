import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    role: 500,
  };

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  logIn() {
    console.log('Datos ingresados: ', this.user);
    this.authService.sigin(this.user).subscribe((res: any) => {
      if (res.token != undefined) {
        localStorage.setItem('sesTokenAE', res.token);
        this.router.navigate(['private']);
      }
    });
  }
}
