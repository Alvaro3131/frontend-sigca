import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProgramaAsesor } from 'src/app/equipo-tecnico/reportes/reporte';
import { AsesorService } from '../asesor.service';


@Component({
  selector: 'SIGCA-programas',
  templateUrl: './programas.component.html',
  styleUrls: ['./programas.component.css']
})

export class ProgramasComponent implements OnInit {

  constructor(private asesor:AsesorService, private router:Router) { }
  reportes :  ProgramaAsesor[]=[];
  model: any=[];
  id=Number(sessionStorage.getItem('idusuario'));
  ngOnInit(): void {
   
     this.asesor.getProgramasAsesor(this.id).subscribe(listas=>{
       this.reportes=listas;
       console.log( this.reportes);
      
     });
  }
  listar(i:number){
  var  x=String(this.reportes[i].IDBANCO);
  var  y=String(this.reportes[i].IDMODULO);
  var  banco=String(this.reportes[i].BANCO);
  var  modulo=String(this.reportes[i].MODULO);
  var  progreso=String(this.reportes[i].PROGRESO);
  sessionStorage.setItem('progreso',progreso);
  sessionStorage.setItem('nombrebanco',banco);
   sessionStorage.setItem('nombremodulo',modulo);
   sessionStorage.setItem('modulo',y)
   sessionStorage.setItem('banco',x)
   this.router.navigate(['/reporte-asesor']);
    
  }
  pedido(i:number){
    var  x=String(this.reportes[i].IDBANCO);
   

     sessionStorage.setItem('banco',x)
     this.router.navigate(['/pedido']);
      
    }
 

}
