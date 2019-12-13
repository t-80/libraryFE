import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { Librarian } from 'src/app/_models/librarian';
let LibrarianListItemComponent = class LibrarianListItemComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Librarian)
], LibrarianListItemComponent.prototype, "librarian", void 0);
LibrarianListItemComponent = tslib_1.__decorate([
    Component({
        selector: 'app-librarian-list-item',
        templateUrl: './librarian-list-item.component.html',
        styleUrls: ['./librarian-list-item.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], LibrarianListItemComponent);
export { LibrarianListItemComponent };
//# sourceMappingURL=librarian-list-item.component.js.map