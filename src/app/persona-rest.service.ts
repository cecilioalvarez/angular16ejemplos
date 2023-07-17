import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaRESTService {

  constructor(public http:HttpClient) {


   }
   public buscarTodos() : Observable<Persona[]> {

    return this.http.get<Persona[]>("http://localhost:3000/personas");

   }
   public buscarUno(nombre:string) : Observable<Persona> {

    return this.http.get<Persona>(`http://localhost:3000/personas/${nombre}`);

   }

   public borrar(nombre:string) : Observable<Persona> {

    return this.http.delete<Persona>(`http://localhost:3000/personas/${nombre}`);

   }
   public insertar(persona:Persona) :Observable<Persona> {

    return this.http.post<Persona>("http://localhost:3000/personas",persona);
   }
}
