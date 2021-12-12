import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { PrivilegiosUsuario } from 'src/app/equipo-tecnico/reportes/reporte';
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'SIGCA-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  id=Number(sessionStorage.getItem('idusuario'));
  @Output() link:EventEmitter<string> = new EventEmitter;
  @Input() opened:boolean=true;
  @ViewChild('enlace') enlace:ElementRef | any;
  @ViewChild('enlace_dos') enlace_dos:ElementRef | any;
  @ViewChild('submenu') submenu:ElementRef | any;
  @ViewChild('submenu2') submenu2:ElementRef | any;
  estado_desplegar1:boolean=false;
  estado_desplegar2:boolean=false;
  privi:PrivilegiosUsuario[]=[];
  constructor(private ren2: Renderer2,private privilegios:SidebarService) {

  }

 ngOnInit(): void {
  this.privilegios.getPrivilegios(this.id).subscribe(listas=>{
    this.privi=listas;
    for(let i = 0; i<this.privi.length; i++){
      var nombre=this.privi[i].MENU;
      if(nombre=='Crear Modulo' || nombre=='Crear Seminario'){
        this.privi[i].ICONO='far fa-plus-square'
      
      }
      
      if(nombre=='Asignar Banco-Modulo'){
        this.privi[i].ICONO='fas fa-hands-helping'
        
      }
      
      if(nombre=='Reporte Participacion'){
        this.privi[i].ICONO='fas fa-book'
        
      }
      if(nombre=='Reporte Participantes'){
        this.privi[i].ICONO='fas fa-users'
        
      }

      if(nombre=='Reporte Seminario'){
        this.privi[i].ICONO='fas fa-address-book'
        
      }
      if(nombre=='Controlar Modulo'){
        this.privi[i].ICONO='fas fa-tasks'
        
      }
      if(nombre=='Reporte Desarrollo'){
        this.privi[i].ICONO='fas fa-clipboard'
        
      }
      
      if(nombre=='Seguimiento Socio'){
        this.privi[i].ICONO='fas fa-book-reader'
        
      }
      

      
     
     

    }
    
   
  });
 }


 enviarCrearModulo(i:number):void{
  var  x=String(this.privi[i].NO_PRIVILEGIOS);
 
  this.link.emit(x);
 }
 asignar():void {
   this.link.emit('equipo-tecnico/asignar-banco-modulo')
 }
 seguimientoSocio():void{
  this.link.emit('asesor');

}
 enviarParticipacion():void{
   this.link.emit('equipo-tecnico/reportes/reporte-participacion');

 }
 enviarParticipantes():void{
   this.link.emit('equipo-tecnico/reportes/reporte-participantes');
 }

 enviarSeminario():void{
   this.link.emit('equipo-tecnico/reportes/reporte-seminario');
 }

 enviarBancaModulo():void{
  this.link.emit('equipo-tecnico/bancaModulo');
 }

 enviarControlarModulo():void{
  this.link.emit('equipo-tecnico/controlarModulo');
 }

 enviarCrearSeminario():void{
   this.link.emit('equipo-tecnico/crearSeminario');
 }

desplegar(){
   const a = this.enlace.nativeElement;
   const submenu = this.submenu.nativeElement;
   const height = submenu.scrollHeight;
   const sibling = this.ren2.nextSibling(a);
   if ( sibling.classList.contains( 'mostrar' )) {
     this.ren2.removeClass( sibling,'mostrar');
     this.ren2.removeAttribute(submenu,"style");
   }else{
      this.ren2.addClass(sibling,'mostrar');
      this.ren2.setStyle(submenu,"height",height+"px");
   }
}

desplegar2(){
 const a = this.enlace_dos.nativeElement;
 const submenu2 = this.submenu2.nativeElement;
 const height = submenu2.scrollHeight;
 const sibling = this.ren2.nextSibling(a);
 if ( sibling.classList.contains( 'mostrar' )) {
     this.ren2.removeClass( sibling,'mostrar');
     this.ren2.removeAttribute(submenu2,"style");
   }else{
      this.ren2.addClass(sibling,'mostrar');
      this.ren2.setStyle(submenu2,"height",height+"px");
   }
}

}
