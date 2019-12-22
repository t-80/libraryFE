import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibrarianListComponent } from './librarian-list/librarian-list.component';
import { AuthGuard } from '../_shared/_guards';
import { Role } from '../_shared/_models/enums/role';
import { AdminComponent } from './admin.component';
import { RefreshComponent } from './refresh/refresh.component';
import { LibrarianAddEditComponent } from './librarian-add-edit/librarian-add-edit.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: {
      expectedRole: Role.Admin,
    },
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'list',
        component: LibrarianListComponent,
        children: [
          {
            path: 'edit/:id',
            component: LibrarianAddEditComponent
          },
          {
            path: 'add',
            component: LibrarianAddEditComponent
          },
        ]
      },
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class AdminRoutingModule {}