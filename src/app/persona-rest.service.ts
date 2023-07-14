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
   public insertar(persona:Persona) :Observable<Persona> {

    return this.http.post<Persona>("http://localhost:3000/personas",persona);
   }
}
