import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AsisSeminario } from '../models/AsistenciaSeminario';
import { Pedido } from '../models/pedido';
import { Progreso } from '../models/Progreso';
import { RecursoA } from '../models/recursosA';
import { Seminario } from '../models/Seminario';

@Injectable({
  providedIn: 'root'
})
export class SocioService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private urlpost:string ='https://sigca-upeu.herokuapp.com/api/pedidooracion/new';
  private urlget:string ='https://sigca-upeu.herokuapp.com/api/seminario/socio';
  private progres:string ='https://sigca-upeu.herokuapp.com/api/reportes/progreso';
  private asistencia:string ='https://sigca-upeu.herokuapp.com/api/asistenciaseminario/new';
  private recurso:string ='https://sigca-upeu.herokuapp.com/api/reportes/asistenciaRecurso';
  private estadoAsistencia:string ='https://sigca-upeu.herokuapp.com/api/AsistenciaRecurso/asistencia';
  private asis:string ='https://sigca-upeu.herokuapp.com/api/asistenciaseminario/validacion';

  constructor(private http: HttpClient, private router: Router) { }
  insertarModulo(obj: Pedido) {


    return this.http.post(this.urlpost, obj,this.httpOptions) ;
  }
  insertarAsis(obj: AsisSeminario) {


    return this.http.post(this.asistencia, obj,this.httpOptions) ;
  }
  getSeminarios(id:number): Observable<Seminario[]>{
    return this.http.get<Seminario[]>(`${this.urlget}/${id}`)
  }

  getProgreso(id:number): Observable<Progreso[]>{

    return this.http.get<Progreso[]>(`${this.progres}/${id}`)

  }

  insertarasistencia(socio:number, seminario:number, valor: number, des:String ) {

    return this.http.post(`${this.asistencia}/${socio}/${seminario}/${valor}/${des}`,null) ;
  }

  getRecursosS(sesion:number, socio:number): Observable<RecursoA[]>{
    return this.http.get<RecursoA[]>(`${this.recurso}/${sesion}/${socio}`)
  }
  getAsistencia(seminario:number, socio:number): Observable<AsisSeminario[]>{
    return this.http.get<AsisSeminario[]>(`${this.asis}/${seminario}/${socio}`)
  }

  actualizarEstado(id:number ) {
    return this.http.post(`${this.estadoAsistencia}/${id}`,null) ;

  }

}
