import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona';
import { Observable } from 'rxjs';
import { GenericRESTService } from './generic-rest.service';

@Injectable({
  providedIn: 'root'
})
export class PersonaRESTService extends GenericRESTService<Persona,keyof Persona>{

  constructor(public  override http:HttpClient) {

    super("personas","nombre",http);

   }

   public buscarTodosPorNombre(nombre:string):Observable<Persona[]> {

    return this.http.get<Persona[]>(`http://localhost:3000/personas?nombre=${nombre}`);
   }
  
}
