import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

import { User, Provider } from 'src/app/_shared/_models';
import { Role } from 'src/app/_shared/_models/enums/role';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const users: User[] = [
            { id: 1, name: 'admin', password: 'admin', provider: Provider.Local, authority: Role.Admin },
            { id: 2, name: 'user', password: 'user', provider: Provider.Local, authority: Role.Customer },
            { id: 2, name: 'librarian', password: 'librarian', provider: Provider.Local, authority: Role.Librarian }
        ];

        const { url, method, headers, body } = request;
        const authHeader = request.headers.get('Authorization');
        const isLoggedInValue = authHeader && authHeader.startsWith('Bearer fake-jwt-token');
        const roleString = isLoggedInValue && authHeader.split('.')[1];
        const role = roleString ? getEnumKeyByEnumValue(Role, roleString) : null;


        // wrap in delayed observable to simulate server api call
        return of(null)
            .pipe(mergeMap(handleRoute))
            .pipe(materialize()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe(delay(500))
            .pipe(dematerialize());

        function handleRoute() {
            switch (true) {
                case url.endsWith('/users/authenticate') && method === 'POST':
                    return authenticate();
                //  case url.endsWith('/users/register') && method === 'POST':
                //      return register();
                case url.endsWith('/users') && method === 'GET':
                    return getUsers();
                case url.match(/\/users\/\d+$/) && request.method === 'GET':
                    return getUserById();
                //  case url.match(/\/users\/\d+$/) && method === 'DELETE':
                //      return deleteUser();
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }
        }

        // route functions

        function authenticate() {
            const { username, password } = body;
            const user = users.find(x => x.name === request.body.username && x.password === request.body.password);
            if (!user) return error('Username or password is incorrect');
            return ok({
                id: user.id,
                name: user.name,
                authority: user.authority,
                token: `fake-jwt-token.${user.authority}`
            });
        }

        function register() {
            const user = body

            if (users.find(x => x.name === user.name)) {
                return error('Username "' + user.name + '" is already taken')
            }

            user.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));

            return ok();
        }

        function getUsers() {
            if (!isLoggedIn()) return unauthorized();
            return ok(users);
        }

        function getUserById() {

            if (!isLoggedIn) return unauthorized();

            // get id from request url
            let id = idFromUrl();

            // only allow normal users access to their own record

            const currentUser = users.find(x => x.authority === role);
            console.log('before');
            console.log(role);
            //fix it
            // if (id !== currentUser.id && role !== Role.Admin) return unauthorized();

            const user = users.find(x => x.id === id);
            console.log('after');
            return ok(user);

        }

        //  function deleteUser() {
        //      if (!isLoggedIn()) return unauthorized();

        //      users = users.filter(x => x.id !== idFromUrl());
        //      localStorage.setItem('users', JSON.stringify(users));
        //      return ok();
        //  }

        // helper functions

        function ok(body?) {
            return of(new HttpResponse({ status: 200, body }))
        }

        function error(message) {
            return throwError({ error: { message } });
        }

        function unauthorized() {
            return throwError({ status: 401, error: { message: 'Unauthorised' } });
        }

        function isLoggedIn() {
            //  return headers && headers.startsWith('Bearer fake-jwt-token');
            return isLoggedInValue;
        }

        function idFromUrl() {
            const urlParts = url.split('/');
            return parseInt(urlParts[urlParts.length - 1]);
        }

        function getEnumKeyByEnumValue(Role, enumValue) {
            let keys = Object.keys(Role).filter(x => Role[x] == enumValue);
            return keys.length > 0 ? keys[0] : null;
        }
    }
}

//         const authHeader = request.headers.get('Authorization');
//         const isLoggedIn = authHeader && authHeader.startsWith('Bearer fake-jwt-token');
//         const roleString = isLoggedIn && authHeader.split('.')[1];
//         const role = roleString ? Role[roleString] : null;

//         // wrap in delayed observable to simulate server api call
//         return of(null).pipe(mergeMap(() => {

//             // authenticate - public
//             if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {
//                 const user = users.find(x => x.name === request.body.username && x.password === request.body.password);
//                 if (!user) return error('Username or password is incorrect');
//                 return ok({
//                     id: user.id,
//                     name: user.name,
//                     authority: user.authority,
//                     token: `fake-jwt-token.${user.authority}`
//                 });
//             }

//             // get user by id - admin or user (user can only access their own record)
//             if (request.url.match(/\/users\/\d+$/) && request.method === 'GET') {

//                 if (!isLoggedIn) return unauthorised();

//                 // get id from request url
//                 let urlParts = request.url.split('/');
//                 let id = parseInt(urlParts[urlParts.length - 1]);

//                 // only allow normal users access to their own record
//                 console.log(roleString)

//                 const currentUser = users.find(x => x.authority === role);
//                 if (id !== currentUser.id && role !== Role.Admin) return unauthorised();

//                 const user = users.find(x => x.id === id);

//                 return ok(user);
//             }

//             // get all users (admin only)
//             if (request.url.endsWith('/users') && request.method === 'GET') {
//                 console.log("!!!!!!!!!!!!!!!!!!!!")
//                 if (role !== Role.Admin) return unauthorised();
//                 return ok(users);
//             }

//             // pass through any requests not handled above
//             return next.handle(request);
//         }))
//             // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
//             .pipe(materialize())
//             .pipe(delay(500))
//             .pipe(dematerialize());

//         // private helper functions

//         function ok(body) {
//             return of(new HttpResponse({ status: 200, body }));
//         }

//         function unauthorised() {
//             return throwError({ status: 401, error: { message: 'Unauthorised' } });
//         }

//         function error(message) {
//             return throwError({ status: 400, error: { message } });
//         }
//     }
// }

export let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};