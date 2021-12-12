import { Component, OnInit } from '@angular/core';
import { Seminario } from 'src/app/models/Seminario';
import { SeminarioServicesService } from '../seminario-services.service';
import swal from 'sweetalert2';

@Component({
  selector: 'SIGCA-crear-seminario-principal',
  templateUrl: './crear-seminario-principal.component.html',
  styleUrls: ['./crear-seminario-principal.component.css']
})
export class CrearSeminarioPrincipalComponent implements OnInit {
  semi:Seminario[]=[];
  inSeminario: Seminario = new Seminario();
  constructor(private seminario:SeminarioServicesService) { }
  status:boolean=true;
  idSeminario:any=0;
 

  ngOnInit(): void {
    this.traerSeminario()
     
  }
  EditarAgregarSeminario(){
    this.status=true;
  }

  CambiarEstado(id:any){
  this.status=false;
  this.idSeminario=id;
  this.seminario.buscarSeminarioId(id).subscribe(e=>{
    console.log(e)
    this.inSeminario.NO_SEMINARIO=e.NO_SEMINARIO;
    this.inSeminario.URL_SEMINARIO=e.URL_SEMINARIO;
    this.inSeminario.FE_INICIO=e.FE_INICIO;
    this.inSeminario.FE_FIN= e.FE_FIN;
  })
  }

  EditarSeminario(){
      swal
        .fire({
          title: "<h1 style='color:blue'>Editar</h1>",
          text: '¿Desea editar el Seminario?',
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
            this.seminario.editarSeminario(this.idSeminario,this.inSeminario).subscribe();
            // Hicieron click en "Sí"
            swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Tu Modulo se actualizo con exito',
              showConfirmButton: false,
              timer: 1500,
            });
            this.limpiarSeminario();
          } else {
            // Dijeron que no
            this.limpiarSeminario();
            console.log('NO se elimina la venta');
          }
        });
    }
 
  GuardarSeminario(){
    console.log(this.inSeminario)
     {
      swal
        .fire({
          title: "<h1 style='color:blue'>Agregar</h1>",
          text: '¿Desea Agregar este Seminario ?',
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
            this.seminario.insertarSeminario(this.inSeminario).subscribe();
              swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Tu Seminario se Guardo con exito',
              showConfirmButton: false,
              timer: 1500,
            }); 
            this.traerSeminario()
            this.limpiarSeminario()  
          } else {
          this.limpiarSeminario()
          }
        });
    }
  }
  limpiarSeminario(){
    this.inSeminario.NO_SEMINARIO="";
    this.inSeminario.URL_SEMINARIO="";
    this.inSeminario.FE_INICIO="";
    this.inSeminario.FE_FIN="";
    this.idSeminario=0;
  }
  traerSeminario(){
    this.seminario.getSeminarios().subscribe(listas=>{
      this.semi=listas;
    });
 }  
}

