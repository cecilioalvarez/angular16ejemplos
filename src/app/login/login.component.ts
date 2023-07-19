import { Component } from '@angular/core';
import { Usuario } from '../usuario';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usuario:Usuario= {} as Usuario;

  constructor( public loginService:LoginService) {

  }
  login() {

    this.loginService.login(this.usuario).subscribe((datos:any)=> {
      console.log(datos);

    })

    console.log(this.usuario);
  }
}
