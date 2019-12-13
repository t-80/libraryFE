import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_services';
let AuthGuard = class AuthGuard {
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    canLoad(route) {
        return this.isAuthenticated();
    }
    canActivate(route, state) {
        return this.isAuthenticated(route);
    }
    canActivateChild(childRoute, state) {
        return this.isAuthenticated(childRoute);
    }
    isAuthenticated(route) {
        let allowedUserType = true;
        const currentUser = this.authenticationService.currentUserValue;
        let loggedInUserType = currentUser.authority;
        let expectedRole;
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
};
AuthGuard = tslib_1.__decorate([
    Injectable({ providedIn: 'root' }),
    tslib_1.__metadata("design:paramtypes", [Router,
        AuthenticationService])
], AuthGuard);
export { AuthGuard };
//# sourceMappingURL=auth.guard.js.map