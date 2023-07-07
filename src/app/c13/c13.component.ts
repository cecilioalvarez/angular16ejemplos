import { Component } from '@angular/core';
import { Persona } from '../persona';
import { Profesion } from '../profesion';

@Component({
  selector: 'app-c13',
  templateUrl: './c13.component.html',
  styleUrls: ['./c13.component.css']
})
export class C13Component {

  /*
  nombreTxt?:string;
  apellidosTxt?:string;
  edadTxt?:string;
  */

   persona:Persona= {} as Persona;
   profesiones:Profesion[]=[];
   profesion?:Profesion

   constructor() {

    this.profesiones.push(new Profesion(1,"informatico","standard"));
    this.profesiones.push(new Profesion(2,"administrativo","basico"));
    this.profesiones.push(new Profesion(3,"administrativo","experto"));
    this.profesiones.push(new Profesion(4,"ingeniero","junior"));
    this.profesiones.push(new Profesion(5,"ingeniero","senior"));

   }

}
