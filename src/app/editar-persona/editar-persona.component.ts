import { Component } from '@angular/core';
import { Persona } from '../persona';
import { PersonaService } from '../persona.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaRESTService } from '../persona-rest.service';

@Component({
  selector: 'app-editar-persona',
  templateUrl: './editar-persona.component.html',
  styleUrls: ['./editar-persona.component.css']
})
export class EditarPersonaComponent {

  personaEditar = {} as Persona;


  constructor(public personaService: PersonaRESTService, public router: Router, activeRoute: ActivatedRoute) {


    activeRoute.paramMap.subscribe(params => {
      console.log(params.get("nombre"));
      var nombre: string | null = params.get("nombre");

      if (nombre) {
        this.personaService.buscarUno(nombre).subscribe((datos) => {

          this.personaEditar = datos;
        })

      }
    });




  }


  salvar(persona: Persona) {
   
    this.personaService.actualizar(persona).subscribe((datos)=> {
      this.router.navigate(["/lista"]);

    });

  
  
  }
}
