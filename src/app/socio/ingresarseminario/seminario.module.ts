import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Vista1Component } from './vista1/vista1.component';
import { Vista2Component } from './vista2/vista2.component';



@NgModule({
  declarations: [
    Vista1Component,
    Vista2Component
  ],
  imports: [
    CommonModule
  ]
})
export class SeminarioModule { }
