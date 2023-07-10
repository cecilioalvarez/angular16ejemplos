import { Component } from '@angular/core';
import { Persona } from '../persona';
import { PersonaService } from '../persona.service';

@Component({
  selector: 'app-lista1-personas',
  templateUrl: './lista1-personas.component.html',
  styleUrls: ['./lista1-personas.component.css']
})
export class Lista1PersonasComponent {

  estado:string="listar";
  //un conjunto de variales asociadas a la vista y poco mas.
  
  personas:Persona[]=[];
  personaNueva:Persona= {} as Persona;

  constructor(public personaService:PersonaService) {

    this.personas=personaService.buscarTodos();
  }
  insertar(){

    this.personaService.insertar(this.personaNueva);
    this.estado='listar';
  }

  verFormularioInsertar() {
    this.estado='formularioInsertar';
  }
  borrar(persona:Persona) {
    this.personaService.borrar(persona);
  }
}
