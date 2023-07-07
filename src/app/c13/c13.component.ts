import { Component } from '@angular/core';
import { Persona } from '../persona';

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
    
}
