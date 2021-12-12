import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocioComponent } from './socio.component';
import { IngresarmoduloComponent } from './ingresarmodulo/ingresarmodulo.component';
import { IngresarseminarioComponent } from './ingresarseminario/ingresarseminario.component';
import { RegistrarpedidoComponent } from './registrarpedido/registrarpedido.component';
import { SesionesComponent } from './ingresarmodulo/sesiones/sesiones.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavTopComponent } from '../home/nav-top/nav-top.component';
import { HomeModule } from '../home/home.module';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSnackBarModule} from '@angular/material/snack-bar';

const routes : Routes =[
  {path: 'vistaSocio', component:SocioComponent
  },
  {path: 'seminario', component:IngresarseminarioComponent
}
]

@NgModule({
  declarations: [
    SocioComponent,
    IngresarmoduloComponent,
    IngresarseminarioComponent,
    RegistrarpedidoComponent,
    SesionesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes),HomeModule, CdkAccordionModule, MatSnackBarModule
  ],
  providers:[],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SocioModule { }
