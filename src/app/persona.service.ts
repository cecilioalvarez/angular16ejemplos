import { Injectable } from '@angular/core';
import { Persona } from './persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  // contiene una lista de personas en memoria
  personas:Persona[]=[];
  constructor() {

    this.personas.push(new Persona("pedro","perez",20),new Persona("angel","sanchez",30),new Persona("ana","gomez",40))
    this.personas.push(new Persona("pedro","perez",20),new Persona("angel","sanchez",30),new Persona("ana","gomez",40))
  }
 

}
