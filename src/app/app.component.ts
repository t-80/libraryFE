import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './_shared/_services';
import { User } from './_shared/_models';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    currentUser: User;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    // get isAdmin() {
    //     return this.currentUser && this.currentUser.authority === Role.Admin;
    // }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/']);
    }
}