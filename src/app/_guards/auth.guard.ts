import { Injectable } from '@angular/core';
import { Router, Route, CanLoad, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, CanActivateChild } from '@angular/router';

import { AuthenticationService } from 'src/app/_services';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanLoad, CanActivate, CanActivateChild {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
    return this.isAuthenticated();
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.isAuthenticated(route);
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.isAuthenticated(childRoute);
  }

  protected isAuthenticated(route?: ActivatedRouteSnapshot) {
    let allowedUserType = true;
    const currentUser = this.authenticationService.currentUserValue;
    let loggedInUserType = currentUser.authority

    let expectedRole: string;
    if (route) {
      console.log(route);
      expectedRole = route.data.expectedRole;

      if (expectedRole) {
        allowedUserType = loggedInUserType === expectedRole;
      }
    }

    if (!allowedUserType) {
      return false;
    }

    return true;
  }
}