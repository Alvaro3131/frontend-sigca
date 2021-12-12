import { NgModule } from '@angular/core';
import { CommonModule, NgForOf } from '@angular/common';
import { AsesorRutasComponent } from './asesor-rutas.component';
import { RouterModule, Routes } from '@angular/router';
import { ProgramasComponent } from './programas/programas.component';
import { FormsModule } from '@angular/forms';

import {  HttpClientModule } from '@angular/common/http';
import { ReporteComponent } from './reporte/reporte.component';
import { PedidoComponent } from './pedido/pedido.component';



const routes : Routes =[
  {path:'programa', component:ProgramasComponent},
  {path:'reporte-asesor', component:ReporteComponent},
  {path:'pedido', component:PedidoComponent},
]

@NgModule({
  declarations: [
    AsesorRutasComponent,
    ProgramasComponent,
    ReporteComponent,
    PedidoComponent
  ],
  imports: [
    CommonModule,RouterModule.forRoot(routes), FormsModule, HttpClientModule
  ]
})
export class AsesorModule { }
