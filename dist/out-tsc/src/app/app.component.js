import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './_services';
let AppComponent = class AppComponent {
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }
    // get isAdmin() {
    //     return this.currentUser && this.currentUser.authority === Role.Admin;
    // }
    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/']);
    }
};
AppComponent = tslib_1.__decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [Router,
        AuthenticationService])
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map