import { Component } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-dialogo',
  templateUrl: './dialogo.component.html',
  styleUrls: ['./dialogo.component.css']
})
export class DialogoComponent {

  mensaje?:string;

  constructor( @Inject(MAT_DIALOG_DATA) data:string) {

  }

  aceptar() {

    console.log("todo ok");
  }
  cancelar() {

    console.log("no ok")
  }

  quizas() {

    console.log("a lo mejor");
  }
}
