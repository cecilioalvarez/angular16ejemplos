import { Component } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-c12',
  templateUrl: './c12.component.html',
  styleUrls: ['./c12.component.css']
})
export class C12Component {


  personas:Persona[]=[];
  personaElegida:Persona={} as Persona;
 
  
  constructor() {

    this.personas.push(new Persona("pedro","perez",20),new Persona("angel","sanchez",30),new Persona("ana","gomez",40))
  }



}
