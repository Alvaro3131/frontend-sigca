import { Component, OnInit } from '@angular/core';
import { ReportesService } from 'src/app/equipo-tecnico/reportes/reportes.service';
import { Pedido } from 'src/app/models/pedido';
import swal from 'sweetalert2';
import { AsesorService } from '../asesor.service';

@Component({
  selector: 'SIGCA-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
fecha: any=[];
ped: Pedido[]=[];
idbanco=Number(sessionStorage.getItem('banco'));
socios:any=[];
  constructor(private pedido:ReportesService, private asesor:AsesorService) { }

  ngOnInit(): void {

    this.pedido.listarSocios(this.idbanco).subscribe(listas=>{
      this.socios=listas;
      console.log( this.socios);
     
    });
  }
listar(i:number){

  var fecha=this.fecha.se;
  var socio=Number(this.socios[i].ID_PERSONA);

  if(fecha!=null){
    this.asesor.Pedidos(fecha,socio).subscribe(listas=>{
      this.ped=listas;
      console.log( this.ped);
     
    });
  }else{
    swal.fire({
      title: 'NO SELECCIONO UNA FECHA',
      text: 'Debe seleccionar una fecha para poder ver los pedidos',
      icon: 'warning',
      confirmButtonText: 'OK'
    })
  }

}
}
