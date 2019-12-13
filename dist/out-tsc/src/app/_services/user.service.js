import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
let UserService = class UserService {
    constructor(http) {
        this.http = http;
    }
    getAll() {
        return this.http.get(`${config.apiUrl}/users`);
    }
    getById(id) {
        return this.http.get(`${config.apiUrl}/users/${id}`);
    }
};
UserService = tslib_1.__decorate([
    Injectable({ providedIn: 'root' }),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], UserService);
export { UserService };
//# sourceMappingURL=user.service.js.map