import { Component } from '@angular/core';
import { Persona } from '../persona';
import { PersonaService } from '../persona.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-persona',
  templateUrl: './editar-persona.component.html',
  styleUrls: ['./editar-persona.component.css']
})
export class EditarPersonaComponent {

  personaEditar={} as Persona;
  

  constructor(public personaService: PersonaService,public router:Router ,activeRoute:ActivatedRoute) {


    activeRoute.paramMap.subscribe(params=> {
 
      var nombre:string|null=params.get("nombre");

        if (nombre) {
          this.personaEditar=this.personaService.buscar(nombre);
        }

        
        
     });

   
    
    
  }
 

  salvar(persona:Persona) {
    
    var personaEditada=this.personaService.buscar(persona.nombre);
    personaEditada.apellidos=persona.apellidos;
    personaEditada.edad=persona.edad;
    this.router.navigate(["/lista"]);

  }
}
