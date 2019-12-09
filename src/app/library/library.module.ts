import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryComponent } from './library.component';
import { AllMaterialModule } from '../_shared/all-angular-material.module';


@NgModule({
    declarations: [
      LibraryComponent
    ],
    imports: [
        CommonModule,
        AllMaterialModule
    ],
})
export class LibraryModule { }
