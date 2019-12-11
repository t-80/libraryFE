import { Injectable } from '@angular/core';
import { Router, Route, CanLoad, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, CanActivateChild } from '@angular/router';

import { AuthenticationService } from 'src/app/_services';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanLoad, CanActivate, CanActivateChild {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    canLoad(route: Route): boolean {
        return this.isAuthenticated();
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.isAuthenticated(route);
      }
    
      canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.isAuthenticated(childRoute);
      }
    
      protected isAuthenticated(route?: ActivatedRouteSnapshot) {
        let allowedUserType = true;
        const currentUser = this.authenticationService.currentUserValue;
        let loggedInUserType = currentUser.authority
    
        let expectedRole: string;
        if (route) {
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