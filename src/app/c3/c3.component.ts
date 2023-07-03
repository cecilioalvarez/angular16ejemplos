import { Component } from '@angular/core';

@Component({
  selector: 'app-c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.css']
})
export class C3Component {

  contador:number=0;

  incrementa() {

    this.contador++;

  }
  decrementa() {
    this.contador--;
  }
}
