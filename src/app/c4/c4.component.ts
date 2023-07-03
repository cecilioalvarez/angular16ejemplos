import { Component } from '@angular/core';

@Component({
  selector: 'app-c4',
  templateUrl: './c4.component.html',
  styleUrls: ['./c4.component.css']
})
export class C4Component {

  lista:string[]=["hola","que","tal","estas"];
  item:string="";

  addItem() {
    this.lista.push(this.item);
  }
  
  borrar(item:string) {
    console.log(item);
    var posicion:number=this.lista.indexOf(item);
    this.lista.splice(posicion,1);

  }
}
