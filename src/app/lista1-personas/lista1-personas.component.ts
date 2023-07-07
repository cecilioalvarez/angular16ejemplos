import { Component } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-lista1-personas',
  templateUrl: './lista1-personas.component.html',
  styleUrls: ['./lista1-personas.component.css']
})
export class Lista1PersonasComponent {

  personas:Persona[]=[];
}
