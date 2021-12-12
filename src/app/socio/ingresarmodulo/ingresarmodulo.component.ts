import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Progreso } from 'src/app/models/Progreso';
import { SocioService } from '../socio.service';

@Component({
  selector: 'SIGCA-ingresarmodulo',
  templateUrl: './ingresarmodulo.component.html',
  styleUrls: ['./ingresarmodulo.component.css']
})
export class IngresarmoduloComponent implements OnInit {
  @Output() link:EventEmitter<string> = new EventEmitter;
  constructor( private profreso:SocioService) { }
  x=Number(sessionStorage.getItem('idusuario'));
  progres: Progreso[]=[];
  nombre="";
  progreso='';
  id=0;
  ngOnInit(): void {
    this.Progreso();
  }

  entrarModulo():void{
    this.link.emit('socio/ingresarmodulo/sesiones')

  }

  Progreso():void{
    this.profreso.getProgreso(this.x).subscribe(listas=>{
      this.progres=listas;
      console.log(this.progres)
      this.nombre=String(this.progres[0].NO_MODULO);
      this.progreso=String(this.progres[0].Avance_Modulo);
      this.id=Number(this.progres[0].FK_MODULO);
    });

  }

  guardar():void{
    var y = String(this.id);
    sessionStorage.setItem('id_modulo', y);
  }
}
