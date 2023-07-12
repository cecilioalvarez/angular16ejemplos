import { Component } from '@angular/core';
import { Persona } from '../persona';
import { PersonaService } from '../persona.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalle-persona',
  templateUrl: './detalle-persona.component.html',
  styleUrls: ['./detalle-persona.component.css']
})
export class DetallePersonaComponent {

  personaDetalle:Persona={} as Persona;


  constructor(public personaService: PersonaService,public router:Router ,activeRoute:ActivatedRoute) {

    activeRoute.paramMap.subscribe(params=> {
 
      var nombre:string|null=params.get("nombre");

        if (nombre) {
          this.personaDetalle=this.personaService.buscar(nombre);
        }

        
        
     });
   


  
    
  }


  volver() {


  }
}
