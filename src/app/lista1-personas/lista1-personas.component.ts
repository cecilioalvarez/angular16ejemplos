import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Persona } from '../persona';
import { PersonaService } from '../persona.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-lista1-personas',
  templateUrl: './lista1-personas.component.html',
  styleUrls: ['./lista1-personas.component.css']
})
export class Lista1PersonasComponent implements OnInit {

  estado: string = "listar";
  //un conjunto de variales asociadas a la vista y poco mas.

  displayedColumns: string[] = ['nombre', 'apellidos', 'edad', 'botonBorrar'];
  dataSource = new MatTableDataSource<Persona>();

  personas: Persona[] = [];
  personaNueva: Persona = {} as Persona;

  constructor(public personaService: PersonaService, private changeDetectorRefs: ChangeDetectorRef) {

    this.personas = personaService.buscarTodos();
    this.dataSource.data = this.personas;
    
  }
  ngOnInit(): void {
   
  }
  insertar() {

    this.personaService.insertar(this.personaNueva);

    this.estado = 'listar';

    this.dataSource= new MatTableDataSource(this.personaService.buscarTodos());
  }

  verFormularioInsertar() {
    this.estado = 'formularioInsertar';
  }
  borrar(persona: Persona) {

    this.personaService.borrar(persona);
    this.dataSource.data = this.personaService.buscarTodos();


  }
}
