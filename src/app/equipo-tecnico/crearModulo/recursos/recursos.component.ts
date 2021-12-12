import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import swal from 'sweetalert2';
import { Sesion } from 'src/app/models/sesion';
import { ModulosService } from '../service/modulos.service';
import { Recurso } from 'src/app/models/recurso';

@Component({
  selector: 'SIGCA-recursos',
  templateUrl: './recursos.component.html',
  styleUrls: ['./recursos.component.css'],
})
export class RecursosComponent implements OnInit {
  @Output() status: EventEmitter<boolean> = new EventEmitter();
  @Input() id_sesion: number = 0;
  @ViewChild('secuencia') secuencia: ElementRef | any;
  sesion: Sesion = new Sesion();
  secuenciaRecurso: number = 0;
  recurso: any[] = [];
  insrecurso: Recurso = new Recurso();
  tipo: any[] = [];
  statusRecurso: boolean = true;
  id_tipo: number = 0;
  constructor(private service: ModulosService) {}

  ngOnInit(): void {
    this.obtenerSesion();
    this.obtenerRecursoSesion();
  }

  cambiarEstado() {
    this.status.emit(true);
  }

  obtenerSesion() {
    this.service.buscarSesionId(this.id_sesion).subscribe((e) => {
      this.sesion.no_sesion = e.no_sesion;
      console.log(this.sesion);
    });
  }

  obtenerRecursoSesion() {
    this.service.buscarRecursoId(this.id_sesion).subscribe((e: any) => {
      this.recurso = e;
      console.log(this.recurso);
    });

    this.secuenciaRecurso = this.recurso.length;
    console.log(this.secuencia);
  }

  // ?? ELIMINAR RECURSO

  eliminarRecurso(id: number) {
    console.log(id);
    swal
      .fire({
        title: "<h1 style='color:red'>Eliminar</h1>",
        text: '¿Desea eliminar este Recurso?',
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
          this.service.eliminarRecurso(id).subscribe();
          swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Tu sesion se elimino con exito',
            showConfirmButton: false,
            timer: 1500,
          });
          this.obtenerRecursoSesion();
        } else {
          // Dijeron que no
          swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Se cancelo la operacion',
            showConfirmButton: false,
            timer: 1000,
          });
        }
      });
  }

  // ?? EDITAR RECURSO

  editarRecurso(id: number) {
    this.service.buscarRecurso(id).subscribe((e) => {
      console.log(e);
      this.insrecurso = e;
    });
    this.traerTipoRecursos();
    this.statusRecurso = false;
  }

  // ?? TRAER TIPO DE RECURSOS

  traerTipoRecursos() {
    this.service.getTipoRecursos().subscribe((e) => {
      this.tipo = e;
      console.log(this.tipo);
    });
  }

  traerObtenerIdTipo(id: number) {
    this.id_tipo = id;
  }

  //?? AGREGAR RECURSO

  agregarRecurso() {
    swal
      .fire({
        title: "<h1 style='color:blue'>Agregar</h1>",
        text: '¿Desea Agregar este Modulo ?',
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
          this.insrecurso.orden = this.getvalSecuencia();
          this.insrecurso.sesion = {
            id_sesion: this.id_sesion,
          };
          this.insrecurso.tipo = {
            id_tipo: this.id_tipo,
          };

          console.log(this.insrecurso);
          this.service.insertarRecurso(this.insrecurso).subscribe((e) => {
            console.log(e);
          });
          this.obtenerRecursoSesion();
          this.limpiarDocumento();
          swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Tu Modulo se Guardo con exito',
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          // Dijeron que no
          swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Se cancelo la operacion',
            showConfirmButton: false,
            timer: 1000,
          });
          this.limpiarDocumento();
        }
      });
    // this.limpiarDocumento();
  }

  actualizarDocumento() {
    swal
      .fire({
        title: "<h1 style='color:blue'>Actualizar</h1>",
        text: '¿Desea Actualizar este Modulo ?',
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
          this.insrecurso.orden = this.getvalSecuencia();
          this.insrecurso.sesion = {
            id_sesion: this.id_sesion,
          };
          this.insrecurso.tipo = {
            id_tipo: this.id_tipo,
          };
          console.log(this.insrecurso);
          this.service
            .updateRecurso(this.insrecurso.id, this.insrecurso)
            .subscribe();
          this.obtenerRecursoSesion();
          this.limpiarDocumento();
          swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Tu Modulo se actualizo con exito',
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          // Dijeron que no
          swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Se cancelo la operacion',
            showConfirmButton: false,
            timer: 1000,
          });
          this.limpiarDocumento();
        }
      });
  }

  //?? OBTENER SECUENCIA

  getvalSecuencia(): number {
    const select = this.secuencia.nativeElement;
    const selectdOption = select.options[select.selectedIndex].value;
    console.log(selectdOption);
    return selectdOption;
  }

  limpiarDocumento() {
    this.insrecurso.nombrerecurso = '';
    this.insrecurso.descripcion = '';
    this.insrecurso.orden = 0;
    this.insrecurso.sesion = null;
    this.insrecurso.tipo = null;
  }
}
