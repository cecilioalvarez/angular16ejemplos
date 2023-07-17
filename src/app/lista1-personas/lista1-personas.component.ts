import { ChangeDetectorRef, Component, OnInit, Inject } from '@angular/core';
import { Persona } from '../persona';
import { PersonaRESTService } from '../persona-rest.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogoComponent } from '../dialogo/dialogo.component';

@Component({
  selector: 'app-lista1-personas',
  templateUrl: './lista1-personas.component.html',
  styleUrls: ['./lista1-personas.component.css']
})
export class Lista1PersonasComponent {

  estado: string = "listar";
  //un conjunto de variales asociadas a la vista y poco mas.

  displayedColumns: string[] = ['nombre', 'apellidos', 'edad', 'botonBorrar', 'botonDetalle', 'botonEditar'];


  personas: Persona[] = [];
  personaNueva: Persona = {} as Persona;
  personaDetalle: Persona = {} as Persona;

  constructor(public personaService: PersonaRESTService, public router: Router, public dialog: MatDialog) {

    personaService.buscarTodos().subscribe(datos => {

      this.personas = datos;

    })


  }



  verFormularioInsertar() {
    //this.estado = 'formularioInsertar';
    this.router.navigate(["/formularioInsertar"]);
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
    //this.personaService.borrar(persona);
    //this.personas=[...this.personaService.buscarTodos()];
  }
  detalle(persona: Persona) {

    this.router.navigate(["/detalle", persona.nombre]);

  }
  volver() {
    this.estado = "listar";
  }
  editar(persona: Persona) {

    this.router.navigate(["/editar", persona.nombre]);
  }
}
