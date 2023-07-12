import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Lista1PersonasComponent } from './lista1-personas/lista1-personas.component';
import { FormularioPersonaComponent } from './formulario-persona/formulario-persona.component';
import { DetallePersonaComponent } from './detalle-persona/detalle-persona.component';

const routes: Routes = [
{ path: "", redirectTo: "/lista", pathMatch: "full" },
{ path: "lista", component: Lista1PersonasComponent, pathMatch: "full" }, 
{ path: "formularioInsertar", component: FormularioPersonaComponent, pathMatch: "full" },
{ path: "detalle/:nombre", component: DetallePersonaComponent, pathMatch: "full" }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
