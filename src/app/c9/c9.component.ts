import { Component } from '@angular/core';

@Component({
  selector: 'app-c9',
  templateUrl: './c9.component.html',
  styleUrls: ['./c9.component.css']
})
export class C9Component {

  lenguajes:string[]=["python","typescript",
  "javascript","C","ruby","kotlin"];

  lenguajeSeleccionado:string="";

  lenguajesSeleccionados:string[]=[];

  cambiar(valor:string) {

    this.lenguajeSeleccionado=valor;
  }

  cambiar2(valor:string[]) {
    console.log(valor);
    this.lenguajesSeleccionados=valor;
  }

}
