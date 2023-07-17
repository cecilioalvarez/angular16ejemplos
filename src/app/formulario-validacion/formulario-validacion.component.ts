import { Component } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-formulario-validacion',
  templateUrl: './formulario-validacion.component.html',
  styleUrls: ['./formulario-validacion.component.css']
})
export class FormularioValidacionComponent {

  persona:Persona= {} as Persona;

  validar() {

    console.log("hemos validado y todo ok");
  }
}
