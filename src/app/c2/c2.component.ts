import { Component } from '@angular/core';
import { Rectangulo } from '../rectangulo';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component {

  r1:Rectangulo;

  constructor() {

    this.r1=new Rectangulo(2,2);

  }


}
