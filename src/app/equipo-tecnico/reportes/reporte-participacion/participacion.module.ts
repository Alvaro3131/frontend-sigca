import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Tabla1Component } from './tabla1/tabla1.component';
import { Tabla2Component } from './tabla2/tabla2.component';
import { FormsModule } from '@angular/forms';
import { Tabla3Component } from './tabla3/tabla3.component';
import { Tabla4Component } from './tabla4/tabla4.component';

const routes : Routes =[
  
    {path:'tabla1', component:Tabla1Component},
    {path:'tabla2', component:Tabla2Component},
    {path:'tabla3', component:Tabla3Component},
    {path:'tabla4', component:Tabla4Component}

]

@NgModule({
  declarations: [
    Tabla2Component,
    Tabla3Component,
    Tabla4Component
  ],
  imports: [
    CommonModule,RouterModule.forRoot(routes), FormsModule
  ]
})
export class ParticipacionModule { }
