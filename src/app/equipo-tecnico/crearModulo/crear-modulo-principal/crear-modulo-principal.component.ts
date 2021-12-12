import {
  Component,
  ElementRef,
  EventEmitter,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Categoria } from 'src/app/models/categoria';
import { Modulo } from 'src/app/models/modulo';
import { Sesion } from 'src/app/models/sesion';
import swal from 'sweetalert2';
import { ModulosService } from '../service/modulos.service';
@Component({
  selector: 'SIGCA-crear-modulo-principal',
  templateUrl: './crear-modulo-principal.component.html',
  styleUrls: ['./crear-modulo-principal.component.css'],
})
export class CrearModuloPrincipalComponent implements OnInit, OnChanges {
  estadoUpdateDelete: boolean = false;
  selectModulo: any[] = [];
  sesion: Sesion[] = [];
  nombreModulo = '';
  inSesion: Sesion = new Sesion();
  descripcion = '';
  id_modulo: number = 0;
  id_categoria: number = 0;
  insModulo: Modulo = new Modulo();
  updateModulo: Modulo = new Modulo();
  selectCategoria: Categoria[] = [];
  //@Output() datosSesion: EventEmitter<any> = new EventEmitter();
  @Output() idModulo: EventEmitter<number> = new EventEmitter();
  @ViewChild('modulo') modulo: ElementRef | any;
  @ViewChild('categoria') categoria: ElementRef | any;
  @ViewChild('categoriaupdate') categoria2: ElementRef | any;

  constructor(private moduloservice: ModulosService) {}
  ngOnChanges(): void {
    this.traerSesion(this.id_modulo);
  }

  ngOnInit(): void {
    this.cargarModulos();
  }

  // TODO: ESTE METODO TRAE LOS MODULO PARA PODER MOSTRARLO EN EL COMBO DE LA IZQUIERDA
  cargarModulos(): void {
    this.EliminarModulos();
    this.moduloservice.getModulo().subscribe((data) => {
      data.find((e) => {
        this.selectModulo.push(e);
      });
    });
    // console.log(this.selectModulo.find((e) => console.log(e.id_modulo)));
  }

  EliminarModulos(): void {
    this.moduloservice.getModulo().subscribe((data) => {
      data.find((e) => {
        this.selectModulo.pop();
      });
    });
    // console.log(this.selectModulo.find((e) => console.log(e.id_modulo)));
  }

  abrirModal(): void {
    this.cargarCategoria();
  }

  // TODO: ESTE METODO TRAE LA CATEGORIA PARA PODER MOSTRARLO EN EL COMBO DEL MODAL
  cargarCategoria(): void {
    this.moduloservice.getCategoria().subscribe((data) => {
      console.log(data);
      this.selectCategoria = data;
    });
  }

  //TODO: OBTIENE EL ID DEL MODULO AL DAR CLICK EN EL MODAL EN SI y trae las sesiones de lo seccionado
  getVal(): void {
    const select = this.modulo.nativeElement;
    const selectdOption = select.options[select.selectedIndex].value;
    this.traerSesion(selectdOption);
    this.id_modulo = selectdOption;
    this.estadoUpdateDelete = true;
  }

  getvalCategoria(): number {
    const select = this.categoria.nativeElement;
    const selectdOption = select.options[select.selectedIndex].value;
    console.log(selectdOption);
    return selectdOption;
  }

  getvalCategoriaUpdate(): number {
    const select = this.categoria2.nativeElement;
    const selectdOption = select.options[select.selectedIndex].value;
    console.log(selectdOption);
    return selectdOption;
  }

  //TODO: GUARDA LOS DATOS DEL MODAL
  guardar(): void {
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
          this.insModulo.no_modulo = this.nombreModulo;
          console.log(this.getvalCategoria());
          this.insModulo.categoria = { id_categoria: this.getvalCategoria() };
          this.moduloservice.insertarModulo(this.insModulo).subscribe((e) => {
            console.log(e);
          });
          swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Tu Modulo se Guardo con exito',
            showConfirmButton: false,
            timer: 1500,
          });
          this.limpiar();
          this.cargarModulos();
        } else {
          // Dijeron que no
          this.limpiar();
        }
      });
  }

  //TODO: LIMPIA LOS CAMPOS DEL MODAL AL SALIR Y GUARDAR
  limpiar(): void {
    this.nombreModulo = '';
    this.insModulo.no_modulo = '';
    this.updateModulo.no_modulo = '';
    const select = this.categoria.nativeElement;
    const selectdOption = select.options[select.selectedIndex];
    selectdOption.value = null;
  }

  deleteModulo() {
    swal
      .fire({
        title: "<h1 style='color:red'>Eliminar</h1>",
        text: '¿Desea eliminar el módulo?',
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
          this.moduloservice.deleteModulo(this.id_modulo).subscribe((data) => {
            console.log(data);
          });
          this.cargarModulos();
        } else {
          // Dijeron que no
          console.log('*NO se elimina la venta*');
        }
      });
  }

  updateModuloLleanarDatos() {
    this.cargarCategoria();
    console.log(this.id_modulo);
    this.moduloservice.getModuloId(this.id_modulo).subscribe((e) => {
      console.log(e);
      this.updateModulo = e;
    });
  }

  editarModulo() {
    swal
      .fire({
        title: "<h1 style='color:blue'>Editar</h1>",
        text: '¿Desea editar el módulo?',
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
          this.updateModulo.no_modulo = this.nombreModulo;
          this.updateModulo.categoria = {
            id_categoria: this.getvalCategoriaUpdate(),
          };
          this.moduloservice
            .updateModulo(this.id_modulo, this.updateModulo)
            .subscribe((e) => console.log(e));
          swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Tu Modulo se actualizo con exito',
            showConfirmButton: false,
            timer: 1500,
          });
          this.limpiar();
          this.cargarModulos();
        } else {
          // Dijeron que no
          console.log('*NO se elimina la venta*');
        }
      });
  }

  // TODO: SESION

  traerSesion(id: number): void {
    this.idModulo.emit(id);
  }

  insertarSesion(): void {
    //alert(this.inSesion.no_sesion);
    swal
      .fire({
        title: "<h1 style='color:blue'>Agregar</h1>",
        text: '¿Desea Agregar la Sesion?',
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
          this.inSesion.modulo = { id_modulo: this.id_modulo };
          this.moduloservice
            .insertarSesion(this.inSesion)
            .subscribe((e) => console.log(e));
          swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Tu Sesion se Guardo con exito',
            showConfirmButton: false,
            timer: 1500,
          });
          this.traerSesion(this.id_modulo);
          this.limpiarSesion();
        } else {
          // Dijeron que no
          this.limpiarSesion();
        }
      });
  }

  limpiarSesion(): void {
    this.inSesion.no_sesion = '';
    this.inSesion.id_sesion = 0;
    this.inSesion.modulo = null;
  }
}
