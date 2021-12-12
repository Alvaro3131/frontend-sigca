import { SidebarComponent } from './home/sidebar/sidebar.component';
import { PrincipalComponent } from './home/home-principal/principal.component';
import { CargarScriptsService } from './cargar-scripts.service';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SidebarModule } from 'ng-sidebar';
import { PagesLoginComponent } from './core/presentation/pages/pages-login/pages-login.component';
import { UsuarioRutasComponent } from './equipo-tecnico/usuario-rutas.component';
import { ReportesRutasComponent } from './equipo-tecnico/reportes/reportes-rutas.component';
import { ReporteParticipacionComponent } from './equipo-tecnico/reportes/reporte-participacion/reporte-participacion.component';
import { ReporteParticipantesComponent } from './equipo-tecnico/reportes/reporte-participantes/reporte-participantes.component';
import { ReporteSeminarioComponent } from './equipo-tecnico/reportes/reporte-seminario/reporte-seminario.component';
import { AsesorRutasComponent } from './asesor/asesor-rutas.component';
import { AsesorModule } from './asesor/asesor.module';
import { Tabla1Component } from './equipo-tecnico/reportes/reporte-participacion/tabla1/tabla1.component';
import { EquipoTecnicoModule } from './equipo-tecnico/equipo-tecnico.module';
import { ProgramasComponent } from './asesor/programas/programas.component';
import { MainCrearModuloComponent } from './equipo-tecnico/crearModulo/main-crear-modulo/main-crear-modulo.component';
import { MainSeminarioComponent } from './equipo-tecnico/crearSeminario/main-seminario/main-seminario.component';
import { MainControlarModuloComponent } from './equipo-tecnico/controlarModulo/main-controlar-modulo/main-controlar-modulo.component';
import { HttpClientModule } from '@angular/common/http';
import { SocioComponent } from './socio/socio.component';
import { SesionesComponent } from './socio/ingresarmodulo/sesiones/sesiones.component';
import { ReporteComponent } from './asesor/reporte/reporte.component';
import { HomeModule } from './home/home.module';
import { SocioModule } from './socio/socio.module';

import { IngresarseminarioComponent } from './socio/ingresarseminario/ingresarseminario.component';
import { AsignarBancoModuloComponent } from './equipo-tecnico/asignacion/asignar-banco-modulo.component';
import { PedidoComponent } from './asesor/pedido/pedido.component';
import { DesarrollomoduloComponent } from './equipo-tecnico/reportes/desarrollomodulo/desarrollomodulo.component';




const routes: Routes = [
  { path: '', component: PagesLoginComponent },
  { path: 'vistaSocio', component: SocioComponent },
  { path: 'vistaModulo', component: SesionesComponent },
  {
    path: 'asesor',
    component: AsesorRutasComponent,
    children: [
      { path: 'programa', component: ProgramasComponent },
      { path: 'reporte-asesor', component: ReporteComponent },
      { path: 'pedido', component: PedidoComponent }
    ],
  },
  { path: 'dashboard/equipoTecnico', component: PrincipalComponent },

  {
    path: 'equipo-tecnico',
    component: UsuarioRutasComponent,
    children: [
      { path: 'crearModulo', component: MainCrearModuloComponent },
      { path: 'crearSeminario', component: MainSeminarioComponent },

      { path: 'asignacion', component: AsignarBancoModuloComponent},

      { path: 'controlarModulo', component: MainControlarModuloComponent },
      {
        path: 'reportes',
        component: ReportesRutasComponent,
        children: [
          {
            path: 'reporte-participacion',
            component: ReporteParticipacionComponent,
            children: [{ path: 'tabla1', component: Tabla1Component }],
          },
          {
            path: 'reporte-participantes',
            component: ReporteParticipantesComponent,
          },
          { path: 'reporte-seminario', component: ReporteSeminarioComponent },
          { path: 'desarrollo', component: DesarrollomoduloComponent }
        ],
      },
    ],
  },
];
//cambios
@NgModule({
  declarations: [AppComponent, SidebarComponent, PrincipalComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    CoreModule,
    SidebarModule.forRoot(),
    AsesorModule,
    EquipoTecnicoModule,
    HttpClientModule,
    HomeModule,
    SocioModule,
  ],
  providers: [CargarScriptsService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
