import { Component } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {

  nombre:string="pepitopadre";
  persona:Persona={} as Persona;
  // estoy cambiando la propiedad del padre
  pulsarPadre(nombre:string) {
   
    this.nombre=nombre;
  }


  pulsarPersona() {

    this.persona= new Persona("juan","gomez",40);
  }
}
