import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibrarianListItemComponent } from './librarian-list/librarian-list-item/librarian-list-item.component';
import { LibrarianListComponent } from './librarian-list/librarian-list.component';
import { AllMaterialModule } from '../_shared/all-angular-material.module';



@NgModule({
    declarations: [
        LibrarianListItemComponent,
        LibrarianListComponent
    ],
    imports: [
        CommonModule,
        AllMaterialModule
    ],
})
export class AdminModule { }
