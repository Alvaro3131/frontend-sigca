import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportesRutasComponent } from './reportes-rutas.component';
import { ReporteParticipacionComponent } from './reporte-participacion/reporte-participacion.component';
import { RouterModule, Routes } from '@angular/router';
import { Tabla1Component } from './reporte-participacion/tabla1/tabla1.component';
import { ReporteParticipantesComponent } from './reporte-participantes/reporte-participantes.component';

import { ReporteSeminarioComponent } from './reporte-seminario/reporte-seminario.component';

import { ParticipacionModule } from './reporte-participacion/participacion.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DesarrollomoduloComponent } from './desarrollomodulo/desarrollomodulo.component';

import { SeminarioModule } from 'src/app/socio/ingresarseminario/seminario.module';


const routes : Routes =[
  {path:'reporte-participacion', component:ReporteParticipacionComponent,children:[
    {path:'tabla1', component:Tabla1Component}
  ]},
  {path:'reporte-participantes', component:ReporteParticipantesComponent},
  {path:'reporte-seminario', component:ReporteSeminarioComponent},
  {path:'desarrollo', component:DesarrollomoduloComponent}
]


@NgModule({
  declarations: [
    ReportesRutasComponent,
    ReporteParticipacionComponent,
    Tabla1Component,
    ReporteParticipantesComponent,
    
    ReporteSeminarioComponent,
    
    DesarrollomoduloComponent,
          
  ],
  imports: [
    CommonModule,RouterModule.forRoot(routes),ParticipacionModule,HttpClientModule,FormsModule,SeminarioModule
  ]
})
export class ReportesModule { }
