import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesLoginComponent } from './presentation/pages/pages-login/pages-login.component';
import { LoginComponent } from './presentation/view/login/login.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PagesLoginComponent,
    LoginComponent

  ],
  imports: [
    CommonModule,FormsModule
  ]
})
export class CoreModule { }
