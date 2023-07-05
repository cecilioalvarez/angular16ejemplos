import { Component } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-c10',
  templateUrl: './c10.component.html',
  styleUrls: ['./c10.component.css']
})
export class C10Component {

  personas:Persona[]=[];

  personaSeleccionada:Persona ={} as Persona;
  constructor() {

    this.personas.push(new Persona("pedro","perez",20),new Persona("angel","sanchez",30),new Persona("ana","gomez",40))
  }

  seleccionar(persona:Persona) {
    console.log(persona);
    this.personaSeleccionada=persona;
  }
  

}
