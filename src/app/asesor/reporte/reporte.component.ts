import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sesion } from 'src/app/equipo-tecnico/reportes/reporte';
import { ReportesService } from 'src/app/equipo-tecnico/reportes/reportes.service';
import { AsesorService } from '../asesor.service';

@Component({
  selector: 'SIGCA-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {
  sesiones: any=[];
  reportes: any=[];
  modal: any=[];
  model:any=[];
  modulo=Number(sessionStorage.getItem('modulo'));
  banco=Number(sessionStorage.getItem('banco'));
  nombreb=String(sessionStorage.getItem('nombrebanco'));
  nombrem=String(sessionStorage.getItem('nombremodulo'));
  progreso=Number(sessionStorage.getItem('progreso'));
  constructor(private sesion:ReportesService, private router:Router, private asesor:AsesorService) { }
  ngOnInit(): void {
    this.sesion.getSesion(this.modulo).subscribe(listas=>{
      this.sesiones=listas;
     console.log(this.sesion);
    });

  }
  listartabla(){
    var x=Number(this.model.sesion)
    this.sesion.getParticipacionSesiones(this.banco,this.modulo,x).subscribe(listas=>{
      this.reportes=listas;
      sessionStorage.removeItem('modulo');
      sessionStorage.removeItem('banco');
      sessionStorage.removeItem('nombrebanco');
      sessionStorage.removeItem('nombremodulo');
      sessionStorage.removeItem('progreso');

    });
  }
  litarmodal(i:number){
    var x=Number(this.model.sesion)
    var y=Number(this.reportes[i].ID)
    this.asesor.getRecursosSocio(y,x).subscribe(listas=>{
      this.modal=listas;
     console.log(this.modal)
    });
  }
  

  
}
