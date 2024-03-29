import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// used to create fake backend
import { fakeBackendProvider } from './_helpers';
import { AppComponent } from './app.component';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllMaterialModule } from './_shared/all-angular-material.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { LibraryModule } from './library/library.module';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './_shared/page-not-found/page-not-found.component';
import { MyHeaderComponent } from './_shared/header/header.component';
import { AuthModule } from './auth/auth.module';
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        imports: [
            FormsModule,
            ReactiveFormsModule,
            BrowserModule,
            ReactiveFormsModule,
            HttpClientModule,
            BrowserAnimationsModule,
            AllMaterialModule,
            AuthModule,
            AppRoutingModule,
            AdminModule,
            DashboardModule,
            LibraryModule
        ],
        declarations: [
            AppComponent,
            PageNotFoundComponent,
            MyHeaderComponent
        ],
        providers: [
            { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
            { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
            // provider used to create fake backend
            fakeBackendProvider
        ],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map