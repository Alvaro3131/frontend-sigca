import { Component, OnInit } from '@angular/core';
import { ProgresoSeminario } from 'src/app/models/ProgresoSeminario';
import { ReportesService } from '../../reportes.service';

@Component({
  selector: 'SIGCA-tabla3',
  templateUrl: './tabla3.component.html',
  styleUrls: ['./tabla3.component.css']
})
export class Tabla3Component implements OnInit {
progresos:ProgresoSeminario[]=[];
  constructor(private progreso:ReportesService) { }
distrito=Number(sessionStorage.getItem('distrito'));
seminario=Number(sessionStorage.getItem('seminario'));
  ngOnInit(): void {
   
    this.progreso.getProgresoSeminario(this.distrito,this.seminario).subscribe(listas=>{
      this.progresos=listas;
      console.log(this.progresos)
     
    });
  }

}
