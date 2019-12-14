import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibrarianListComponent } from './librarian-list/librarian-list.component';
import { AuthGuard } from '../_shared/_guards';
import { Role } from '../_shared/_models';


const routes: Routes = [
  {
    path: '',
    component: LibrarianListComponent,
    canActivate: [AuthGuard],
    data: {
      expectedRole: Role.Admin,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class AdminRoutingModule {}