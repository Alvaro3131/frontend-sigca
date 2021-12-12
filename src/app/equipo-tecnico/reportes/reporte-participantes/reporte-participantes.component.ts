import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';
import { Banco, Distrito, Sede, Sesion } from '../reporte';
import { ReportesService } from '../reportes.service';


@Component({
  selector: 'SIGCA-reporte-participantes',
  templateUrl: './reporte-participantes.component.html',
  styleUrls: ['./reporte-participantes.component.css']
})
export class ReporteParticipantesComponent implements OnInit {

  sede: Sede[]=[];
  sesiones: Sesion[]=[];
  bancos: Banco[]=[];
  distritos: Distrito[]=[];
  programaciones: any={};
  model: any={};
  constructor(private reporte:ReportesService, private route:Router, private _CargarScripts:CargarScriptsService) {
    _CargarScripts.Carga(["expotar"], );
   }
  reportes: any=[];
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
    
   
    this.reporte.getParticipantes(this.model.banco,this.model.modulo).subscribe((data: any[])=>{
      this.reportes=data
      console.log(this.reporte);
     
      });


  }
}
