import { Component } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-c5',
  templateUrl: './c5.component.html',
  styleUrls: ['./c5.component.css']
})
export class C5Component {

    lista:Persona[]=[];
    color:string="rojo";

    constructor() {

      this.lista.push(new Persona("pepe","perez",20));
      this.lista.push(new Persona("pepe2","perez",30));
      this.lista.push(new Persona("pepe3","perez",40));
      this.lista.push(new Persona("pepe4","perez",50));
      
    }
    cambiarColor(color:string) {
      this.color=color;
    }

}
