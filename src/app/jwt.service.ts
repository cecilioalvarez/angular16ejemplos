import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JWTService {

  public token: string = ""
  constructor() {

  }
  salvar() {

    localStorage.setItem("token", this.token);
  }
  obtener() {
    localStorage.getItem("token");
  }
}
