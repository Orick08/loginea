import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

import decode from 'jwt-decode';
import { Iuser } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService, public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRoute = route.data.expectedRole;
    const token = localStorage.getItem('sesTokenAE') || '';

    if (token === '') {
      return false;
    }

    const userTokenData: Iuser = decode(token);

    if (userTokenData.role === expectedRoute) {
      return true;
    }

    return false;
  }
}
