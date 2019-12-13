import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibrarianListItemComponent } from './librarian-list/librarian-list-item/librarian-list-item.component';
import { LibrarianListComponent } from './librarian-list/librarian-list.component';
import { AllMaterialModule } from '../_shared/all-angular-material.module';
import { AdminRoutingModule } from './admin-routing.module';
let AdminModule = class AdminModule {
};
AdminModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            LibrarianListItemComponent,
            LibrarianListComponent
        ],
        imports: [
            CommonModule,
            AllMaterialModule,
            AdminRoutingModule
        ],
    })
], AdminModule);
export { AdminModule };
//# sourceMappingURL=admin.module.js.map