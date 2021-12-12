import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Categoria } from 'src/app/models/categoria';
import { Modulo } from 'src/app/models/modulo';
import { Recurso } from 'src/app/models/recurso';
import { Sesion } from 'src/app/models/sesion';

@Injectable({
  providedIn: 'root',
})
export class ModulosService {
  private urlmodulo: string = 'https://sigca-upeu.herokuapp.com/api/modulo';
  private urlcategoria: string = 'https://sigca-upeu.herokuapp.com/api/categoria';
  private urlSesionesDelModulo: string =
    'https://sigca-upeu.herokuapp.com/api/sesion/modulo';
  private urlRecursoSesion: string =
    'https://sigca-upeu.herokuapp.com/api/recursos/sesion/';

  private urlInsertarModulo: string = 'https://sigca-upeu.herokuapp.com/api/modulo/new';
  private urlEliminarModulo: string =
    'https://sigca-upeu.herokuapp.com/api/modulo/delete/';

  private urlBuscarModulo: string = 'https://sigca-upeu.herokuapp.com/api/modulo/search/';
  private urlUpdateModulo: string = 'https://sigca-upeu.herokuapp.com/api/modulo/update/';

  private urlInsertarSesion: string = 'https://sigca-upeu.herokuapp.com/api/sesion/new';

  private urlEliminarSesion: string =
    'https://sigca-upeu.herokuapp.com/api/sesion/delete/';

  private urlUpdateSesion: string = 'https://sigca-upeu.herokuapp.com/api/sesion/update/';

  private urlBuscarSesion: string = 'https://sigca-upeu.herokuapp.com/api/sesion/search/';

  private urlBuscarRecurso: string =
    'https://sigca-upeu.herokuapp.com/api/recursos/sesion/';

  private urlTraerTipoRecurso: string = 'https://sigca-upeu.herokuapp.com/api/tipo/all';
  private urlAgregarRecurso: string = 'https://sigca-upeu.herokuapp.com/api/recursos/new';

  private urlEliminarRecurso: string =
    'https://sigca-upeu.herokuapp.com/api/recursos/delete/';

  private urlUpdaterRecurso: string =
    'https://sigca-upeu.herokuapp.com/api/recursos/update/';

  private urlBuscarRecursoID: string =
    'https://sigca-upeu.herokuapp.com/api/recursos/search/';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  getModulo(): Observable<Modulo[]> {
    return this.http.get<Modulo[]>(this.urlmodulo + '/all');
  }

  getCategoria(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.urlcategoria + '/all');
  }

  getSesionModulo(id: number): Observable<Sesion[]> {
    return this.http.get<Sesion[]>(`${this.urlSesionesDelModulo}/${id}`);
  }

  getRecursoSesion(id: number): Observable<[]> {
    return this.http.get<[]>(`${this.urlRecursoSesion}${id}`);
  }

  getModuloId(id: number): Observable<Modulo> {
    return this.http.get<Modulo>(`${this.urlBuscarModulo}${id}`);
  }

  getTipoRecursos(): Observable<[]> {
    return this.http.get<[]>(this.urlTraerTipoRecurso);
  }

  //TODO: MODULO
  //** Insertar */

  insertarModulo(obj: Modulo) {
    // console.log(obj);
    return this.http.post(this.urlInsertarModulo, obj);
  }

  // ** Eliminar

  deleteModulo(id: number) {
    // console.log(id);
    return this.http.delete(`${this.urlEliminarModulo}${id}`);
  }

  // ** Actualizar

  updateModulo(id: number, obj: Modulo) {
    //    console.log(id);
    console.log(obj);
    return this.http.put(`${this.urlUpdateModulo}${id}`, obj);
  }

  //TODO: SESION

  // **BUSCAR SESION

  buscarSesionId(id: number): Observable<Sesion> {
    return this.http.get<Sesion>(`${this.urlBuscarSesion}${id}`);
  }

  // **INSERTAR SESION
  insertarSesion(obj: Sesion) {
    console.log(obj);
    return this.http.post(this.urlInsertarSesion, obj);
  }

  //**ELIMINAR SESION */

  eiminarSesion(id: number) {
    console.log(id);
    return this.http.delete(`${this.urlEliminarSesion}${id}`);
  }

  //**UPDATE SESION */

  updateSesion(id: number, obj: Sesion) {
    console.log(id);
    console.log(obj);
    return this.http.put(`${this.urlUpdateSesion}${id}`, obj).pipe(
      catchError((e) => {
        if (e.status == 400) {
          return throwError(e);
        }
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(e);
      })
    );
  }

  //todo: Recursos.........................................

  // ?? BUSCAR RECURSO ID

  buscarRecursoId(id: number): Observable<Recurso> {
    return this.http.get<Recurso>(`${this.urlBuscarRecurso}${id}`);
  }

  // ?? INSERTAR RECURSO
  insertarRecurso(obj: any) {
    console.log(obj);
    return this.http.post(this.urlAgregarRecurso, obj);
  }

  eliminarRecurso(id: number) {
    console.log(id);
    return this.http.delete(`${this.urlEliminarRecurso}${id}`);
  }

  updateRecurso(id: number, obj: any) {
    console.log(id);
    console.log(obj);
    return this.http.put(`${this.urlUpdaterRecurso}${id}`, obj);
  }

  buscarRecurso(id: number): Observable<Recurso> {
    return this.http.get<Recurso>(`${this.urlBuscarRecursoID}${id}`);
  }
}
