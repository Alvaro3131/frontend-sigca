import { Component, OnInit } from '@angular/core';
import { Seminario } from 'src/app/models/Seminario';
import { Banco, Distrito, Sede } from '../reporte';
import { ReportesService } from '../reportes.service';

@Component({
  selector: 'SIGCA-reporte-seminario',
  templateUrl: './reporte-seminario.component.html',
  styleUrls: ['./reporte-seminario.component.css']
})
export class ReporteSeminarioComponent implements OnInit {
fecha='Año';
mes='Mes';
nsede='Sede';
distri='Distrito';
seminario='Seminario';
banco='Banco';
sem:Seminario[]=[];
sedes:Sede[]=[];
distritos:Distrito[]=[];
bancos:Banco[]=[];
  constructor(private reporte:ReportesService) { }

  ngOnInit(): void {
    this.reporte.getSede().subscribe(listas=>{
      this.sedes=listas;
      
     
    });
  }

leer(){
   var x=this.fecha+"-"+this.mes
   this.reporte.getSeminarios(x).subscribe(listas=>{
    this.sem=listas;

    console.log(this.sem)
   
  });

}



listarDistritos(){
    
  var x=Number(this.nsede);
   this.reporte.getDistrtio(x).subscribe(listas=>{
     this.distritos=listas;
     console.log(this.distritos)
    
   });
 }

 listarbancos(){
  var dist=Number(this.distri);
   this.reporte.getBanco(dist).subscribe(listas=>{
     this.bancos=listas;
     console.log( this.bancos);
    
   });
 }

 listartabla(){
 
  
    
  if(this.banco=='Banco'){
    sessionStorage.setItem('distrito',this.distri);
    sessionStorage.setItem('seminario',this.seminario);
    
    let tabla1='tabla3';
  (<HTMLIFrameElement>document.getElementById('tablas')).src = tabla1;
  }

  if(this.banco!='Banco'){

    sessionStorage.setItem('seminario',this.seminario);
    sessionStorage.setItem('banco',this.banco);
    let tabla1='tabla4';
  (<HTMLIFrameElement>document.getElementById('tablas')).src = tabla1;
  }
 }
}
