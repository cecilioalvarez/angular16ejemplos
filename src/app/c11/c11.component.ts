import { Component } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-c11',
  templateUrl: './c11.component.html',
  styleUrls: ['./c11.component.css']
})
export class C11Component {


  personas:Persona[]=[];

  personaSeleccionada:Persona ={} as Persona;
  
  constructor() {

    this.personas.push(new Persona("pedro","perez",20),new Persona("angel","sanchez",30),new Persona("ana","gomez",40))
  }

}
