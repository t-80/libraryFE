import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibrarianListItemComponent } from './librarian-list/librarian-list-item/librarian-list-item.component';
import { LibrarianListComponent } from './librarian-list/librarian-list.component';



@NgModule({
    declarations: [
        LibrarianListItemComponent,
        LibrarianListComponent
    ],
    imports: [
        CommonModule
    ],
})
export class AdminModule { }
