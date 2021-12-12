import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Banco, Distrito, Programacion, Sede, Sesion } from '../reporte';
import { ReportesService } from '../reportes.service';



@Component({
  selector: 'SIGCA-reporte-participacion',
  templateUrl: './reporte-participacion.component.html',
  styleUrls: ['./reporte-participacion.component.css']
})
export class ReporteParticipacionComponent implements OnInit {
  sede: Sede[]=[];
  sesiones: any=[];
  bancos: Banco[]=[];
  distritos: Distrito[]=[];
  programaciones: any={};
  model: any={};
  constructor(private reporte:ReportesService, private route:Router) { }

  ngOnInit(): void {
    this.reporte.getSede().subscribe(listas=>{
      this.sede=listas;
      
     
    });
  }
  listarDistritos(){
   var x=Number(this.model.sede);
    this.reporte.getDistrtio(x).subscribe(listas=>{
      this.distritos=listas;
      console.log(this.distritos)
     
    });
  }
  limpiar(){
    
    this.model.distrito=0;
   this.model.banco=0;
   this.model.modulo=0;

   }
  listarbancos(){
    var x=this.model.distrito;
     this.reporte.getBanco(x).subscribe(listas=>{
       this.bancos=listas;
       console.log( this.bancos);
      
     });
   }
   listarsesion(){
    var x=this.model.modulo;
     this.reporte.getSesion(x).subscribe(listas=>{
       this.sesiones=listas;
       console.log(listas)
      console.log(this.sesiones)
      
     });
   }
   listarProgramacion(){
    var x=this.model.banco;
     this.reporte.getProgramacion(x).subscribe(listas=>{
       this.programaciones=listas;
       console.log(this.programaciones)
       
      
     });
   }
  go(){
    
    sessionStorage.setItem("banco", this.model.banco);
    sessionStorage.setItem("modulo", this.model.modulo);
    sessionStorage.setItem("sesion", this.model.sesion);
    var x=Number(this.model.sesion);
    
    if(x==0){
      let tabla1='tabla1';
    (<HTMLIFrameElement>document.getElementById('tablas')).src = tabla1;
    }

    if(x!=0){
      let tabla1='tabla2';
    (<HTMLIFrameElement>document.getElementById('tablas')).src = tabla1;
    }


  }
 
}
