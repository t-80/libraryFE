import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { first } from 'rxjs/operators';
import { UserService, AuthenticationService } from 'src/app/_services';
let LibraryComponent = class LibraryComponent {
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
LibraryComponent = tslib_1.__decorate([
    Component({
        selector: 'app-library',
        templateUrl: './library.component.html',
        styleUrls: ['./library.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [UserService,
        AuthenticationService])
], LibraryComponent);
export { LibraryComponent };
//# sourceMappingURL=library.component.js.map