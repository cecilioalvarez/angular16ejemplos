import { Component } from '@angular/core';
import { Persona } from '../persona';
import { PersonaService } from '../persona.service';
import { Router } from '@angular/router';
import { PersonaRESTService } from '../persona-rest.service';

@Component({
  selector: 'app-formulario-persona',
  templateUrl: './formulario-persona.component.html',
  styleUrls: ['./formulario-persona.component.css']
})
export class FormularioPersonaComponent {

  personaNueva= {}as Persona;


  constructor(public personaService: PersonaRESTService,public router:Router) {
    
  }
  insertar() {

    console.log(this.personaNueva);
    this.personaService.insertar(this.personaNueva).subscribe((datos)=> {

        this.router.navigate(["/lista"]);
    })


   
    

  }
}
