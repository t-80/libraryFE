import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../_guards';
import { Role } from '../_models';
import { LibraryComponent } from './library.component';


const routes: Routes = [
  {
    path: '',
    component: LibraryComponent,
    canActivate: [AuthGuard],
    data: {
      expectedRole: Role.Customer,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class LibraryRoutingModule {}