import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment} from 'src/environments/environment'
import { Librarian } from '../_models/librarian';

@Injectable({ providedIn: 'root' })
export class LibrarianService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Librarian[]>(`${environment.apiUrl}/librarians`);
    }

    getAll2() {
        return this.http.get<Librarian[]>(`${environment.apiUrl}/librarians2`);
    }

    getById(id: number) {
        return this.http.get<Librarian>(`${environment.apiUrl}/librarians/${id}`);
    }

    create(librarian: Librarian) {
        return this.http.post<Librarian>(`${environment.apiUrl}/librarians`, librarian);
    }

    update(librarian: Librarian) {
        return this.http.put<Librarian>(`${environment.apiUrl}/librarians/${librarian.id}`, librarian);
    }

    delete(id: number) {
        return this.http.delete<Librarian>(`${environment.apiUrl}/librarians/${id}`);
    }
}