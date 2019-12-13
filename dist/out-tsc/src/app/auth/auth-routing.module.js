import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
const authRoutes = [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent }
];
let AuthRoutingModule = class AuthRoutingModule {
};
AuthRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [
            RouterModule.forChild(authRoutes)
        ],
        exports: [
            RouterModule
        ]
    })
], AuthRoutingModule);
export { AuthRoutingModule };
//# sourceMappingURL=auth-routing.module.js.map