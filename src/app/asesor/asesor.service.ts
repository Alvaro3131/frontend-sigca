import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { ProgramaAsesor } from '../equipo-tecnico/reportes/reporte';
import { Pedido } from '../models/pedido';
@Injectable({
  providedIn: 'root'
})
export class AsesorService {
  private urlpost:string ='http://localhost:9090/api/reportes'; 
  private url:string ='http://localhost:9090/api/pedidooracion'; 
  constructor(private http: HttpClient, private router: Router) { }

  getProgramasAsesor(id:number): Observable<ProgramaAsesor[]>{
    return this.http.get<ProgramaAsesor[]>(`${this.urlpost}/programa/${id}`)
  }

  getRecursosSocio(socio:number, sesion:number): Observable<ProgramaAsesor[]>{
    return this.http.get<ProgramaAsesor[]>(`${this.urlpost}/recursos/${socio}/${sesion}`)
  }
  Pedidos(fecha:String, id:number): Observable<Pedido[]>{
    return this.http.get<Pedido[]>(`${this.url}/buscar/${fecha}/${id}`)
  }


}
