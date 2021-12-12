
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSnackBarModule} from '@angular/material/snack-bar';
import { SnackBarComponentExampleComponent } from './snack-bar-component-example/snack-bar-component-example.component';



@NgModule({
  declarations: [
    SnackBarComponentExampleComponent
  ],
  imports: [
    CommonModule, MatSnackBarModule
  ],
})
export class SesionesModule { }
