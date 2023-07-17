import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {

  // propiedad de entrada
  @Input()
  nombre?:string;

  @Output()
  eventoMensaje= new EventEmitter<String>();

  @Input()
  persona?:Persona;
  pulsarhijo() {

    console.log("has pulsado el hijo");
    this.eventoMensaje.emit("hola soy el hijo");
  }
}
