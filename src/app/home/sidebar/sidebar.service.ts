import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PrivilegiosUsuario } from 'src/app/equipo-tecnico/reportes/reporte';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private urlpost:string ='https://sigca-upeu.herokuapp.com/api/privilegios'; 
  constructor(private http: HttpClient, private router: Router) { }
  getPrivilegios(id:number): Observable<PrivilegiosUsuario[]>{
    return this.http.get<PrivilegiosUsuario[]>(`${this.urlpost}/usuario/${id}`);  
    
  }
}
