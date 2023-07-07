import { Component } from '@angular/core';
import { Libro } from '../libro';

@Component({
  selector: 'app-c14',
  templateUrl: './c14.component.html',
  styleUrls: ['./c14.component.css']
})
export class C14Component {

  categorias:string[]=["informatica","novela","autoayuda"];

  libro:Libro={} as Libro;
}
