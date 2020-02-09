import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { MatSnackBar } from "@angular/material";
import { AuthenticationService } from 'src/app/_shared/_services';
import { SnackbarComponent } from '../layout/snackbar/snackbar.component';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService,
        private _snackBar: MatSnackBar) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request)
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    let errorMessage = '';
                    if (error.error instanceof ErrorEvent) {
                        // client-side error
                        errorMessage = `Error: ${error.error.message}`;
                    } else {
                        // server-side error
                        if (error.status === 401) {
                            this.authenticationService.logout();
                        }
                        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
                    }
                    this._snackBar.openFromComponent(SnackbarComponent, {
                        duration: 3000,
                        data: errorMessage
                    });
                    return throwError(errorMessage);
                })
            )
    }
}

