import { Component, OnInit } from '@angular/core';
import { Recurso } from 'src/app/models/recurso';
import { Sesion } from 'src/app/models/sesion';

@Component({
  selector: 'SIGCA-main-crear-modulo',
  templateUrl: './main-crear-modulo.component.html',
  styleUrls: ['./main-crear-modulo.component.css'],
})
export class MainCrearModuloComponent implements OnInit {
  datosSesion: Sesion[] = [];
  id_modulo: number = 0;
  id_sesion: number = 0;
  estadoCuadro: boolean = true;
  reinciarSesionesRecurso: boolean = true;
  constructor() {}

  ngOnInit(): void {}

  obtenerIdSesion(id: number) {
    this.id_sesion = id;
  }

  obtenerEstadoCambio(status: boolean) {
    this.estadoCuadro = status;
    console.log(this.estadoCuadro);
  }

  // recibirDatosSesion(datos: any) {
  //   this.datosSesion = datos;
  //   this.estadoCuadro = true;
  //   console.log(this.datosSesion);
  // }

  recibirModulo(id: number) {
    this.id_modulo = id;
  }
  // reiniciarSesiones(status: boolean) {
  //   this.reinciarSesionesRecurso = status;
  // }
}
