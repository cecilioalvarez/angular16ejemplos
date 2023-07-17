import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { PersonaRESTService } from '../persona-rest.service';
@Component({
  selector: 'app-dialogo',
  templateUrl: './dialogo.component.html',
  styleUrls: ['./dialogo.component.css']
})
export class DialogoComponent {

  mensaje?:string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public personaService: PersonaRESTService) {
    
  }

  aceptar() {

    console.log("todo ok");
    this.personaService.borrar(this.data.nombre).subscribe((datos)=> {

      console.log("hemos borrado");
    })
  }
  cancelar() {

    console.log("no ok")
  }

  quizas() {

    console.log("a lo mejor");
  }
}
