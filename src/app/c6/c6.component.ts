import { Component } from '@angular/core';

@Component({
  selector: 'app-c6',
  templateUrl: './c6.component.html',
  styleUrls: ['./c6.component.css']
})
export class C6Component {

  visible:boolean=true;

  ocultar() {
    this.visible=false;

  }
  mostrar() {
    this.visible=true;
  }
}
