import { Component } from '@angular/core';
import { first } from 'rxjs/operators';
import { UserService, AuthenticationService } from 'src/app/_shared/_services';
import { CurrentUser } from 'src/app/_shared/_models/currentUser';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
    currentUser: CurrentUser;
    userFromApi: CurrentUser;

    constructor(
        private userService: UserService,
        private authenticationService: AuthenticationService
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
    }

    ngOnInit() {
        this.userService.getById(this.currentUser.id).pipe(first()).subscribe(user => {
            this.userFromApi = user;
        });
    }
}