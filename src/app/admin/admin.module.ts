import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibrarianListItemComponent } from './librarian-list/librarian-list-item/librarian-list-item.component';
import { LibrarianListComponent } from './librarian-list/librarian-list.component';
import { AllMaterialModule } from '../_shared/all-angular-material.module';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
    declarations: [
        LibrarianListItemComponent,
        LibrarianListComponent
    ],
    imports: [
        CommonModule,
        AllMaterialModule,
        AdminRoutingModule
    ],
})
export class AdminModule { }
