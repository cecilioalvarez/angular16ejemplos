import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-fila-personas',
  templateUrl: './fila-personas.component.html',
  styleUrls: ['./fila-personas.component.css']
})
export class FilaPersonasComponent {

  @Input()
  persona: Persona = {} as Persona;

  @Output()
  eventoBorrar= new EventEmitter<Persona>();
  borrar(persona: Persona) {

    this.eventoBorrar.emit(persona);
  }
  editar(persona: Persona) {

  }

  detalle(persona: Persona) {

  }
}
