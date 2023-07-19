import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JWTService {

  public static token: string = ""
  constructor() {

  }
  salvar() {

    localStorage.setItem("token", JWTService.token);
  }
  obtener() {
    localStorage.getItem("token");
  }
}
