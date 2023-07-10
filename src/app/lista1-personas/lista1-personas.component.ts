import { Component } from '@angular/core';
import { Persona } from '../persona';
import { PersonaService } from '../persona.service';

@Component({
  selector: 'app-lista1-personas',
  templateUrl: './lista1-personas.component.html',
  styleUrls: ['./lista1-personas.component.css']
})
export class Lista1PersonasComponent {

  //un conjunto de variales asociadas a la vista y poco mas.
  
  personas:Persona[]=[];
  personaNueva:Persona= {} as Persona;

  constructor(public personaService:PersonaService) {

    this.personas=personaService.buscarTodos();
  }
  insertar(){

    this.personas.push(this.personaNueva);
  }
}
