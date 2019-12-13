import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryComponent } from './library.component';
import { AllMaterialModule } from '../_shared/all-angular-material.module';
import { LibraryRoutingModule } from './library-routing.module';
let LibraryModule = class LibraryModule {
};
LibraryModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            LibraryComponent
        ],
        imports: [
            CommonModule,
            AllMaterialModule,
            LibraryRoutingModule
        ],
    })
], LibraryModule);
export { LibraryModule };
//# sourceMappingURL=library.module.js.map