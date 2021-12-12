import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';
import { Categoria } from 'src/app/models/categoria';
import { Modulo } from 'src/app/models/modulo';
import { Banco, Sede } from '../reportes/reporte';
import { ReportesService } from '../reportes/reportes.service';

@Component({
  selector: 'asignacion',
  templateUrl: './asignar-banco-modulo.component.html',
  styleUrls: ['./asignar-banco-modulo.component.css']
})
export class AsignarBancoModuloComponent implements OnInit {
  

  check: any = [];
  sede: Sede[]=[];
  model: any = [];
  banco: Banco[]=[];
  modulo: Modulo[]=[];
  categoria: Categoria[]=[];

  
  constructor(private asignacion:ReportesService, private _CargarScripts: CargarScriptsService) { 
    _CargarScripts.Carga(['expotar']);
  }
 
  ngOnInit(): void {
  
    this.asignacion.getSede().subscribe(data=>{
      this.sede=data;
    });
    this.asignacion.getCategoria().subscribe(listas=>{
      this.categoria=listas;
    });
  }
  listarBancosComunales(): void{
  var x = Number(this.model.sede);
  this.asignacion.getBancoSede(x).subscribe(listas=>{
    this.banco=listas;
  });
  }
  listarModulos():void{
    var y = Number(this.model.categoria);
    alert(y)
    this.asignacion.getModulo(y).subscribe(listas=>{
      this.modulo=listas;
    })
  }
  guardar(){
   var mo= String(sessionStorage.getItem('mo'))
   var ba=String(sessionStorage.getItem('ban'))
   this.asignacion.insertarMasivo(mo,ba)
    .subscribe((e) => {
     
      console.log(e);
     
     
    });
   
  }
  
}
