import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibrarianListItemComponent } from './librarian-list/librarian-list-item/librarian-list-item.component';
import { LibrarianListComponent } from './librarian-list/librarian-list.component';
import { AllMaterialModule } from '../_shared/all-angular-material.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { RefreshComponent } from './refresh/refresh.component';
import { MyHeaderComponent } from '../_shared/header/header.component';
import { LibrarianAddEditComponent } from './librarian-add-edit/librarian-add-edit.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { RefreshService } from '../_shared/_services/refresh.service';



@NgModule({
    declarations: [
        AdminComponent,
        RefreshComponent,
        LibrarianAddEditComponent,
        LibrarianListComponent,
        LibrarianListItemComponent,
        MyHeaderComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        AllMaterialModule,
        AdminRoutingModule,
        FormsModule
    ],
    providers: [
        RefreshService
    ]
})
export class AdminModule { }
