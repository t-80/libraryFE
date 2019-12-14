import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from 'src/app/_shared/_models';
import { UserService, AuthenticationService } from 'src/app/_shared/_services';
import { CurrentUser } from '../_shared/_models/currentUser';

@Component({
    selector: 'app-library',
    templateUrl: './library.component.html',
    styleUrls: ['./library.component.css']
})
export class LibraryComponent {
    currentUser: CurrentUser;
    userFromApi: User;

    constructor(
        private userService: UserService,
        private authenticationService: AuthenticationService
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
    }

    ngOnInit() {
        this.userService.getById(this.currentUser.id).pipe(first()).subscribe(user => {
            console.log(user);
            this.userFromApi = user;
        });
    }
}