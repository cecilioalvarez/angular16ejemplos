import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Lista1PersonasComponent } from './lista1-personas/lista1-personas.component';
import { FormularioPersonaComponent } from './formulario-persona/formulario-persona.component';
import { DetallePersonaComponent } from './detalle-persona/detalle-persona.component';
import { EditarPersonaComponent } from './editar-persona/editar-persona.component';
import { Lista2Component } from './lista2/lista2.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
{ path: "", redirectTo: "/login", pathMatch: "full" },
{ path: "lista", component: Lista2Component, pathMatch: "full" }, 
{ path: "login", component: LoginComponent, pathMatch: "full" }, 
{ path: "formularioInsertar", component: FormularioPersonaComponent, pathMatch: "full" },
{ path: "detalle/:nombre", component: DetallePersonaComponent, pathMatch: "full" },
{ path: "editar/:nombre", component: EditarPersonaComponent, pathMatch: "full" }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
