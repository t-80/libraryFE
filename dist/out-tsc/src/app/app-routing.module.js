import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './_shared/page-not-found/page-not-found.component';
const appRoutes = [
    // {
    //   path: 'admin',
    //   loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule),
    //   canLoad: [AuthGuard]
    // },
    // {
    //   path: 'dashboard',
    //   loadChildren: () => import('./dashboard/dashboard.module').then(mod => mod.DashboardModule),
    //   canLoad: [AuthGuard]
    // },
    // {
    //   path: 'library',
    //   loadChildren: () => import('./library/library.module').then(mod => mod.LibraryModule),
    //   canLoad: [AuthGuard]
    // },
    { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
    { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
    { path: 'library', loadChildren: './library/library.module#LibraryModule' },
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [
            RouterModule.forRoot(appRoutes)
        ],
        exports: [
            RouterModule
        ]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map