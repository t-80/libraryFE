import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LibrarianListComponent } from './librarian-list/librarian-list.component';
import { AuthGuard } from '../_guards';
import { Role } from '../_models';
const routes = [
    {
        path: '',
        component: LibrarianListComponent,
        canActivate: [AuthGuard],
        data: {
            expectedRole: Role.Admin,
        },
    },
];
let AdminRoutingModule = class AdminRoutingModule {
};
AdminRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], AdminRoutingModule);
export { AdminRoutingModule };
//# sourceMappingURL=admin-routing.module.js.map