import { Component } from '@angular/core';

@Component({
  selector: 'app-c8',
  templateUrl: './c8.component.html',
  styleUrls: ['./c8.component.css']
})
export class C8Component {

  cambiar(valor:string):void {

    console.log(valor);
  }
}
