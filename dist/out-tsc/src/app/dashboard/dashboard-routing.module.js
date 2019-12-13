import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../_guards';
import { Role } from '../_models';
import { DashboardComponent } from './dashboard.component';
const routes = [
    {
        path: '',
        component: DashboardComponent,
        canActivate: [AuthGuard],
        data: {
            expectedRole: Role.Librarian,
        },
    },
];
let DashboardRoutingModule = class DashboardRoutingModule {
};
DashboardRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], DashboardRoutingModule);
export { DashboardRoutingModule };
//# sourceMappingURL=dashboard-routing.module.js.map