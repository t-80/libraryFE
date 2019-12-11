import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryComponent } from './library.component';
import { AllMaterialModule } from '../_shared/all-angular-material.module';
import { LibraryRoutingModule } from './library-routing.module';


@NgModule({
    declarations: [
      LibraryComponent
    ],
    imports: [
        CommonModule,
        AllMaterialModule,
        LibraryRoutingModule
    ],
})
export class LibraryModule { }
