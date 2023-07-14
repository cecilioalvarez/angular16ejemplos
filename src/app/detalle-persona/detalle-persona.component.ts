import { Component } from '@angular/core';
import { Persona } from '../persona';
import { PersonaService } from '../persona.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaRESTService } from '../persona-rest.service';

@Component({
  selector: 'app-detalle-persona',
  templateUrl: './detalle-persona.component.html',
  styleUrls: ['./detalle-persona.component.css']
})
export class DetallePersonaComponent {

  personaDetalle:Persona={} as Persona;


  constructor(public personaService: PersonaRESTService,public router:Router ,activeRoute:ActivatedRoute) {

    activeRoute.paramMap.subscribe(params=> {
 
      var nombre:string|null=params.get("nombre");

        if (nombre) {
          this.personaService.buscarUno(nombre).subscribe((datos)=> {

            this.personaDetalle=datos;

          })
        }

        
        
     });
   


  
    
  }


  volver() {


  }
}
