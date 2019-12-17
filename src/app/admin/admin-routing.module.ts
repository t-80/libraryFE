import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibrarianListComponent } from './librarian-list/librarian-list.component';
import { AuthGuard } from '../_shared/_guards';
import { Role } from '../_shared/_models/enums/role';
import { AdminComponent } from './admin.component';
import { LibrarianDetailsComponent } from './librarian-details/librarian-details.component';
import { LibrarianNewComponent } from './librarian-new/librarian-new.component';


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
        path: 'list',
        component: LibrarianListComponent
      },
      {
        path: 'list/:id/',
        component: LibrarianDetailsComponent
      },
      {
        path: 'new',
        component: LibrarianNewComponent
      },
      {
        path: 'details',
        component: LibrarianDetailsComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class AdminRoutingModule {}