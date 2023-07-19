import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { JWTService } from './jwt.service';
import { Observable } from 'rxjs';

export const autenticacionGuard: CanActivateFn = (route, state) => {

  const router: Router = inject(Router);

  console.log("entra en el guard");

  if (localStorage.getItem("token") != null) {
    console.log("el token es <"+localStorage.getItem("token")+">")
    console.log("tenemos token")
    return true;
  } else {
    console.log("no tenemos token")
    router.navigate(["login"]);
    return false;
  }

}




