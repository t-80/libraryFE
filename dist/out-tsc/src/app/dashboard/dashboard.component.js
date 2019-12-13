import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { first } from 'rxjs/operators';
import { UserService, AuthenticationService } from 'src/app/_services';
let DashboardComponent = class DashboardComponent {
    constructor(userService, authenticationService) {
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.currentUser = this.authenticationService.currentUserValue;
    }
    ngOnInit() {
        this.userService.getById(this.currentUser.id).pipe(first()).subscribe(user => {
            this.userFromApi = user;
        });
    }
};
DashboardComponent = tslib_1.__decorate([
    Component({
        selector: 'app-dashboard',
        templateUrl: './dashboard.component.html',
        styleUrls: ['./dashboard.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [UserService,
        AuthenticationService])
], DashboardComponent);
export { DashboardComponent };
//# sourceMappingURL=dashboard.component.js.map