import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent} from 'src/app/_shared/page-not-found/page-not-found.component';


const appRoutes: Routes = [
  
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) } ,
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'library', loadChildren: () => import ('./library/library.module').then(m => m.LibraryModule) },
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

