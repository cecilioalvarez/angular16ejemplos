import { Component } from '@angular/core';
import { Persona } from '../persona';
import { PersonaService } from '../persona.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-persona',
  templateUrl: './formulario-persona.component.html',
  styleUrls: ['./formulario-persona.component.css']
})
export class FormularioPersonaComponent {

  personaNueva= {}as Persona;


  constructor(public personaService: PersonaService,public router:Router) {


    
    
  }
  insertar() {

    this.personaService.insertar(this.personaNueva);

    this.router.navigate(["/lista"]);
    

  }
}
