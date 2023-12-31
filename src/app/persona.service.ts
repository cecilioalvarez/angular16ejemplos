import { Injectable } from '@angular/core';
import { Persona } from './persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  // contiene una lista de personas en memoria
  personas: Persona[] = [];
  constructor() {

    this.personas.push(new Persona("pedro", "perez", 20), new Persona("angel", "sanchez", 30), new Persona("ana", "gomez", 40))
    this.personas.push(new Persona("pedro", "perez", 20), new Persona("angel", "sanchez", 30), new Persona("ana", "gomez", 40))
  }

  public buscarTodos(): Persona[] {

    return this.personas;
  }

  public insertar(persona: Persona): void {
    this.personas.push(persona);
  }
  public borrar(persona: Persona): void {
    var indice = this.personas.indexOf(persona);
    this.personas.splice(indice, 1);
  }

  public buscar(nombre: string): Persona {
    return this.personas.filter(p => p.nombre === nombre)[0];

  }


}
