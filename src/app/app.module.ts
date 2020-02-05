import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeAuthBackendProvider, fakeLibrarianBackendProvider } from './_shared/_helpers';

import { AppComponent } from './app.component';

import { JwtInterceptor, ErrorInterceptor } from './_shared/_helpers';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AllMaterialModule } from './_shared/all-angular-material.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { LibraryModule } from './library/library.module';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './_shared/page-not-found/page-not-found.component';
import { AuthModule } from './auth/auth.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';



@NgModule({
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
        LibraryModule,
        FormsModule,

        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AngularFireDatabaseModule
    ],
    declarations: [
        AppComponent,
        PageNotFoundComponent
    ],
    providers: [

        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeAuthBackendProvider,
        fakeLibrarianBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }