import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Globals } from './globals';

@Injectable({
  providedIn: 'root'
})
export abstract class GenericRESTService<T, K extends keyof T> {

  private servidor = Globals.servidor;

  constructor(public recurso: string, public identificador: K, public http: HttpClient) {

  }

  public buscarTodos(): Observable<T[]> {

    return this.http.get<T[]>(`${this.servidor}/${this.recurso}`);
  }
  public insertar(recurso: T): Observable<T> {

    return this.http.post<T>(`${this.servidor}/${this.recurso}`, recurso);
  }

  // cual es la clave primaria del recurso
  // de persona el nombre de un ordenador el numero de de no se el que toque
  public actualizar(recurso: T): Observable<T> {

    var identificador = recurso[this.identificador];

    return this.http.post<T>(`${this.servidor}/${this.recurso}/${identificador}`, recurso);
  }

  public borrar(recurso: T): Observable<T> {

    return this.http.delete<T>(`${this.servidor}/${this.recurso}`);
  }

  public buscarUno(id: any): Observable<T> {

    return this.http.get<T>(`${this.servidor}/${this.recurso}/${id}`);
  }
}
