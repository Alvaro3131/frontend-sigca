import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';
import { RecursoSocio } from '../../reporte';
import { ReportesService } from '../../reportes.service';

@Component({
  selector: 'SIGCA-tabla2',
  templateUrl: './tabla2.component.html',
  styleUrls: ['./tabla2.component.css']
})
export class Tabla2Component implements OnInit {
  reportes: RecursoSocio[]=[];
  constructor(private _CargarScripts:CargarScriptsService, private recurso:ReportesService) { 
    _CargarScripts.Carga(["expotar"]);
  }

  ngOnInit(): void {
    var x=Number(sessionStorage.getItem('sesion'));
    var y=Number(sessionStorage.getItem('banco'));
    this.recurso.getparticipacionrecursosocio(x,y).subscribe((data: any[])=>{
    this.reportes=data
    console.log(this.reportes);
   sessionStorage.removeItem('banco');
   sessionStorage.removeItem('modulo');
   sessionStorage.removeItem('sesion');
    });
  }

}
