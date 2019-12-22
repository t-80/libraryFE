import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { Librarian } from '../_models/librarian';

@Injectable()
export class FakeLibrarianBackendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // some initial default librarians
        const defaultLibrarians : Librarian[] = [
            { id: 1, name: 'Alex', email: 'ttt@gmail.com', photo: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
            { id: 2, name: 'Eva', email: 'eva@gmail.com', photo: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
            { id: 3, name: 'Nastia', email: 'n@gmail.com', photo: 'https://material.angular.io/assets/img/examples/shiba2.jpg' }
        ];

        const defaultLibrarians2 = [
            { id: 1, name: 'Ivan', email: 'ttt@gmail.com', photo: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
            { id: 2, name: 'John', email: 'eva@gmail.com', photo: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
            { id: 3, name: 'Peter', email: 'n@gmail.com', photo: 'https://material.angular.io/assets/img/examples/shiba2.jpg' }
        ];

        // array in local storage for all librarians
        let librarians : Librarian[] = JSON.parse(localStorage.getItem('librarians')) || defaultLibrarians;
        let librarians2 : Librarian[] = JSON.parse(localStorage.getItem('librarians2')) || defaultLibrarians2;

        const { url, method, headers, body } = request;

        // wrap in delayed observable to simulate server api call
        return of(null)
            .pipe(mergeMap(handleRoute))
            .pipe(materialize()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe(delay(500))
            .pipe(dematerialize());

        function handleRoute() {
            switch (true) {
                case url.endsWith('/librarians') && method === 'GET':
                    return getLibrarians();
                case url.endsWith('/librarians2') && method === 'GET':
                        return getLibrarians2();
                case url.match(/\/librarians\/\d+$/) && method === 'GET':
                    return getLibrarianById();
                case url.endsWith('/librarians') && method === 'POST':
                    return createLibrarian();
                case url.match(/\/librarians\/\d+$/) && method === 'PUT':
                    return updateLibrarian();
                case url.match(/\/librarians\/\d+$/) && method === 'DELETE':
                    return deleteLibrarian();
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }    
        }

        // route functions

        function getLibrarians() {
            return ok(librarians);
        }

        function getLibrarians2() {
            return ok(librarians2);
        }

        function getLibrarianById() {
            const librarian = librarians.find(x => x.id === idFromUrl());
            return ok(librarian);
        }

        function createLibrarian() {
            const librarian = body;
            librarian.id = librarians.length ? Math.max(...librarians.map(x => x.id)) + 1 : 1;
            librarians.push(librarian);
            localStorage.setItem('librarians', JSON.stringify(librarians));

            return ok(librarian);
        }

        function updateLibrarian() {
            const librarian = body;
            const index = librarians.findIndex(x => x.id === idFromUrl());
            librarians[index] = librarian;
            localStorage.setItem('librarians', JSON.stringify(librarians));

            return ok(librarian);
        }

        function deleteLibrarian() {
            librarians = librarians.filter(x => x.id !== idFromUrl());
            localStorage.setItem('librarians', JSON.stringify(librarians));
            return ok();
        }

        // helper functions

        function ok(body?) {
            return of(new HttpResponse({ status: 200, body }))
        }

        function idFromUrl() {
            const urlParts = url.split('/');
            return parseInt(urlParts[urlParts.length - 1]);
        }
    }
}

export const fakeLibrarianBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeLibrarianBackendInterceptor,
    multi: true
};