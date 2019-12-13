import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { first } from 'rxjs/operators';
import { UserService } from 'src/app/_services';
let AdminComponent = class AdminComponent {
    constructor(userService) {
        this.userService = userService;
        this.users = [];
    }
    ngOnInit() {
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.users = users;
        });
    }
};
AdminComponent = tslib_1.__decorate([
    Component({
        selector: 'app-admin',
        templateUrl: './admin.component.html',
        styleUrls: ['./admin.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [UserService])
], AdminComponent);
export { AdminComponent };
//# sourceMappingURL=admin.component.js.map