import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent} from 'src/app/_shared/page-not-found/page-not-found.component';


const appRoutes: Routes = [
  
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
  { path: 'library', loadChildren: 'src/app/library/library.module#LibraryModule' },
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

