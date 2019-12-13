import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AllMaterialModule } from '../_shared/all-angular-material.module';
import { BrowserModule } from '@angular/platform-browser';
let AuthModule = class AuthModule {
};
AuthModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            LoginComponent,
            SignupComponent
        ],
        imports: [
            CommonModule,
            BrowserModule,
            FormsModule,
            ReactiveFormsModule,
            AuthRoutingModule,
            AllMaterialModule
        ]
    })
], AuthModule);
export { AuthModule };
//# sourceMappingURL=auth.module.js.map