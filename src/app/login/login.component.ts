import { Component } from '@angular/core';
import { Usuario } from '../usuario';
import { LoginService } from '../login.service';
import { JWTService } from '../jwt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usuario:Usuario= {} as Usuario;

  constructor( public loginService:LoginService, public jwt:JWTService,public router:Router) {

  }
  login() {

    this.loginService.login(this.usuario).subscribe((datos:any)=> {
      console.log(datos);
      this.jwt.token=datos.token;
      this.jwt.salvar()
      this.router.navigate(["lista"])

    })

    console.log(this.usuario);
  }
}
