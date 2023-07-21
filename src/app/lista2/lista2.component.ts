import { Component } from '@angular/core';
import { Persona } from '../persona';
import { PersonaRESTService } from '../persona-rest.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogoComponent } from '../dialogo/dialogo.component';
import { Subject, map, mergeMap } from 'rxjs';

@Component({
  selector: 'app-lista2',
  templateUrl: './lista2.component.html',
  styleUrls: ['./lista2.component.css']
})
export class Lista2Component {

  personas: Persona[] = [];
  personaNueva: Persona = {} as Persona;
  personaDetalle: Persona = {} as Persona;
  filtroNombre: string = "";
  keyUp = new Subject<String>();


  constructor(public personaService: PersonaRESTService, public router: Router, public dialog: MatDialog) {

    personaService.buscarTodos().subscribe(datos => {

      this.personas = datos;

    })
    
   
    this.keyUp.pipe(mergeMap((texto: any) => {
      // esto devuelve un observable
      return this.personaService.buscarTodosPorNombre(texto);

    })).subscribe( (resultado)=> {
      
      this.personas=resultado;
  
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
  salvar(persona: Persona) {

    this.personaService.actualizar(persona).subscribe((datos) => {
      this.personaService.buscarTodos().subscribe((datos) => {
        this.personas = datos;
      });
    });
  }

  hasPulsado(evento: any) {
    this.keyUp.next(evento.target.value);


  }
}


