import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Banco, Distrito, Sede, Sesion } from '../reporte';
import { ReportesService } from '../reportes.service';

@Component({
  selector: 'SIGCA-desarrollomodulo',
  templateUrl: './desarrollomodulo.component.html',
  styleUrls: ['./desarrollomodulo.component.css']
})
export class DesarrollomoduloComponent implements OnInit {
  sede: Sede[]=[];
  sesiones: Sesion[]=[];
  bancos: Banco[]=[];
  distritos: Distrito[]=[];
  programaciones: any={};
  model: any={};
  reportes: any=[];
  desarrollo:any=[];
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
    var distrito=this.model.distrito;
    var banco=this.model.banco;
    
    if(banco==0){
      this.reporte.DesarrolloDistrito(distrito).subscribe((data: any[])=>{
        this.reportes=data
        console.log(this.reportes);
       
        });
  
    }else{
      this.reporte.DesarrolloBanco(banco).subscribe((data: any[])=>{
        this.reportes=data
        console.log(this.reportes);
       
        });
    }
   
 
   }
}
