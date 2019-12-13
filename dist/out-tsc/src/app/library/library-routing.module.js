import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../_guards';
import { Role } from '../_models';
import { LibraryComponent } from './library.component';
const routes = [
    {
        path: '',
        component: LibraryComponent,
        canActivate: [AuthGuard],
        data: {
            expectedRole: Role.Customer,
        },
    },
];
let LibraryRoutingModule = class LibraryRoutingModule {
};
LibraryRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], LibraryRoutingModule);
export { LibraryRoutingModule };
//# sourceMappingURL=library-routing.module.js.map