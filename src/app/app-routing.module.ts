import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AuthGuard }                          from './_guards/auth.guard';
import { PageNotFoundComponent } from './_shared/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(mod => mod.DashboardModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'library',
    loadChildren: () => import('./library/library.module').then(mod => mod.LibraryModule),
    canLoad: [AuthGuard]
  },
  { path: '',   redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

