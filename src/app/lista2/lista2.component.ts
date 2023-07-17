import { Component } from '@angular/core';
import { Persona } from '../persona';
import { PersonaRESTService } from '../persona-rest.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogoComponent } from '../dialogo/dialogo.component';

@Component({
  selector: 'app-lista2',
  templateUrl: './lista2.component.html',
  styleUrls: ['./lista2.component.css']
})
export class Lista2Component {

  personas: Persona[] = [];
  personaNueva: Persona = {} as Persona;
  personaDetalle: Persona = {} as Persona;

  constructor(public personaService: PersonaRESTService, public router: Router, public dialog: MatDialog) {

    personaService.buscarTodos().subscribe(datos => {

      this.personas = datos;

    })
    
  }
  borrar(persona: Persona) {

    const configDialogo = new MatDialogConfig();
    configDialogo.width = "300px";
    configDialogo.height = "250px";
    configDialogo.data = {

      nombre: persona.nombre
    }

    var dialogoResultado = this.dialog.open(DialogoComponent, configDialogo);

    dialogoResultado.beforeClosed().subscribe(() => {

      this.personaService.buscarTodos().subscribe((datos) => {
        this.personas = datos;
      });

    });
  }
}
