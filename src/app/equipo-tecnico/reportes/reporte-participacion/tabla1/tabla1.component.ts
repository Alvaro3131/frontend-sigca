import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';
import { ReportesService } from '../../reportes.service';

@Component({
  selector: 'SIGCA-tabla1',
  templateUrl: './tabla1.component.html',
  styleUrls: ['./tabla1.component.css'],
})
export class Tabla1Component implements OnInit {
  reportes: any = [];
  constructor(
    private _CargarScripts: CargarScriptsService,
    private reporte: ReportesService,
    private route: Router
  ) {
    _CargarScripts.Carga(['expotar']);
  }

  ngOnInit(): void {
    var x = Number(sessionStorage.getItem('banco'));
    var y = Number(sessionStorage.getItem('modulo'));
    this.reporte.getParticipacion(x, y).subscribe((data: any[]) => {
      this.reportes = data;
      for(let i = 0; i<this.reportes.length; i++){
        var numero=Number(this.reportes[i].Asistencia);
        if(numero==1){
          this.reportes[i].Asistencia='fas fa-check'

        }else{
          this.reportes[i].Asistencia=' fas fa-times'
        }
       

      }
      sessionStorage.removeItem('banco');
      sessionStorage.removeItem('modulo');
    });
  }
}
