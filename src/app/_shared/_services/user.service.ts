import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment'

import { User } from 'src/app/_shared/_models';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable, from } from 'rxjs';

@Injectable({ providedIn: 'root' })
// export class UserService {
//     constructor(private http: HttpClient) { }

//     getAll() {
//         return this.http.get<User[]>(`${environment.apiUrl}/users`);
//     }

//     getById(id: number) {
//         console.log("get user")
//         return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
//     }

//     delete(id: number) {
//         return this.http.delete(`${config.apiUrl}/users/${id}`);
//     }
// }

export class UserService {

    constructor(
        private firestore: AngularFirestore
    ) { }


    getAll() {
        console.log("getAll")
        return this.firestore.collection<User>('users').snapshotChanges().pipe(map(actions => {
            return actions.map(action => {
                const user = action.payload.doc.data() as User;
                user.id = + action.payload.doc.id;
                return user;
            });
        }));

    }

    getById(id: number): Observable<User> {
        console.log("betById" + id)
        return this.firestore.collection<User>('users').doc<User>(id.toString()).valueChanges();
    }

    delete(id: number) {
        this.firestore.collection<User>('users').doc<User>(id.toString()).delete();
    }
}