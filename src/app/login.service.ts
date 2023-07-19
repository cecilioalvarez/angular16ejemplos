import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http:HttpClient) {

   }

   public login (usuario:Usuario): Observable<Usuario> {

    return this.http.post<Usuario>("http://localhost:3000/login",usuario);
   }

}
