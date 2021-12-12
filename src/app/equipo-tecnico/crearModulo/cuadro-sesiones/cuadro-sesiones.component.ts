import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  DoCheck,
  OnInit,
  Output,
} from '@angular/core';
import swal from 'sweetalert2';
import { Sesion } from 'src/app/models/sesion';
import { ModulosService } from '../service/modulos.service';

@Component({
  selector: 'SIGCA-cuadro-sesiones',
  templateUrl: './cuadro-sesiones.component.html',
  styleUrls: ['./cuadro-sesiones.component.css'],
})
export class CuadroSesionesComponent implements OnInit, OnChanges, DoCheck {
  datosMostrarSesion: any[] = [];
  @Input() id_modulo: number = 0;
  @Output() status: EventEmitter<boolean> = new EventEmitter();
  @Output() id: EventEmitter<number> = new EventEmitter();
  recurso: any[] = [];
  id_sesion: number = 0;
  sesion: Sesion = new Sesion();
  constructor(private Service: ModulosService) {}

  ngOnChanges(): void {
    this.cargarSesionesID();
  }
  ngOnInit(): void {
    this.cargarSesionesID();
  }

  ngDoCheck() {
    // this.cargarSesionesID();
  }
  cargarSesionesID() {
    console.log(this.id_modulo);
    this.Service.getSesionModulo(this.id_modulo).subscribe((e) => {
      this.datosMostrarSesion = e;
      console.log(this.datosMostrarSesion);
    });
  }

  datosMostarRecurso(id: number): void {
    this.status.emit(false);
    this.id.emit(id);
  }

  borrarDatosRecurso() {
    this.recurso.find((e) => {
      this.recurso.pop();
    });
  }

  eliminarSesion(id: number) {
    swal
      .fire({
        title: "<h1 style='color:red'>Eliminar</h1>",
        text: '¿Desea eliminar esta Sesion?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar',
        cancelButtonColor: '#DD6B55',
        footer: '<span class="red">Lea antes de confirmar</span>',
        allowOutsideClick: false,
      })
      .then((resultado) => {
        if (resultado.value) {
          // Hicieron click en "Sí"
          console.log(id);
          this.Service.eiminarSesion(id).subscribe((e) => console.log(e));
          swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Tu sesion se elimino con exito',
            showConfirmButton: false,
            timer: 1500,
          });
          this.cargarSesionesID();
        } else {
          // Dijeron que no
          console.log('*No se elimina la venta*');
        }
      });
  }

  editarSesion() {
    swal
      .fire({
        title: "<h1 style='color:blue'>Editar</h1>",
        text: '¿Desea Editar esta Sesion?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar',
        cancelButtonColor: '#DD6B55',
        footer: '<span class="red">Lea antes de confirmar</span>',
        allowOutsideClick: false,
      })
      .then((resultado) => {
        if (resultado.value) {
          // Hicieron click en "Sí"
          this.sesion.modulo = { id_modulo: this.id_modulo };
          this.sesion.id_sesion = this.id_sesion;
          this.Service.updateSesion(
            this.sesion.id_sesion,
            this.sesion
          ).subscribe();
          this.cargarSesionesID();
          swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Tu sesion se edito con exito',
            showConfirmButton: false,
            timer: 2000,
          });
          this.limpiarSesion();
        } else {
          // Dijeron que no
          console.log('*No se actualizo la venta*');
        }
      });
  }

  traerIdSesion(id: number) {
    this.id_sesion = id;
    this.Service.buscarSesionId(this.id_sesion).subscribe((e) => {
      this.sesion.id_sesion = e.id_sesion;
      this.sesion.no_sesion = e.no_sesion;
      this.sesion.no_recursos = e.no_recursos;
      this.sesion.modulo = { id_modulo: e.modulo.id_modulo };
    });
  }

  limpiarSesion() {
    this.sesion.no_sesion = '';
    //this.sesion.modulo = null;
    this.id_sesion = 0;
  }
}
