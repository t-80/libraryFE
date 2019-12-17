import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibrarianListItemComponent } from './librarian-list/librarian-list-item/librarian-list-item.component';
import { LibrarianListComponent } from './librarian-list/librarian-list.component';
import { AllMaterialModule } from '../_shared/all-angular-material.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { LibrarianDetailsComponent } from './librarian-details/librarian-details.component';
import { LibrarianNewComponent } from './librarian-new/librarian-new.component';



@NgModule({
    declarations: [
        AdminComponent,
        LibrarianDetailsComponent,
        LibrarianNewComponent,
        LibrarianListComponent,
        LibrarianListItemComponent
    ],
    imports: [
        CommonModule,
        AllMaterialModule,
        AdminRoutingModule
    ],
})
export class AdminModule { }
