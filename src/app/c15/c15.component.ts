import { Component } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-c15',
  templateUrl: './c15.component.html',
  styleUrls: ['./c15.component.css']
})
export class C15Component {
  personas:Persona[]=[];
  constructor() {

    this.personas.push(new Persona("pedro","perez",20),new Persona("angel","sanchez",30),new Persona("ana","gomez",40))
    this.personas.push(new Persona("pedro","perez",20),new Persona("angel","sanchez",30),new Persona("ana","gomez",40))
  }
}
