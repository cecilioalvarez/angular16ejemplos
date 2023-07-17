import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatListModule} from '@angular/material/list';
import { AppComponent } from './app.component';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { C3Component } from './c3/c3.component';
import { C4Component } from './c4/c4.component';
import { FormsModule } from '@angular/forms';
import { C5Component } from './c5/c5.component';
import { C6Component } from './c6/c6.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { C7Component } from './c7/c7.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { C8Component } from './c8/c8.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { C9Component } from './c9/c9.component';
import { C10Component } from './c10/c10.component';
import {MatSelectModule} from '@angular/material/select';
import { C11Component } from './c11/c11.component';
import { C12Component } from './c12/c12.component';
import {MatRadioModule} from '@angular/material/radio';
import { C13Component } from './c13/c13.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import { C14Component } from './c14/c14.component';
import { C15Component } from './c15/c15.component';
import { Lista1PersonasComponent } from './lista1-personas/lista1-personas.component';
import { Mayuscula1Pipe } from './mayuscula1.pipe';
import { AppRoutingModule } from './app-routing.module';
import { FormularioPersonaComponent } from './formulario-persona/formulario-persona.component';
import { DetallePersonaComponent } from './detalle-persona/detalle-persona.component';
import { EditarPersonaComponent } from './editar-persona/editar-persona.component';
import { DialogoComponent } from './dialogo/dialogo.component';
import {MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { FormularioValidacionComponent } from './formulario-validacion/formulario-validacion.component';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
@NgModule({
  declarations: [
    AppComponent,
    C1Component,
    C2Component,
    C3Component,
    C4Component,
    C5Component,
    C6Component,
    C7Component,
    C8Component,
    C9Component,
    C10Component,
    C11Component,
    C12Component,
    C13Component,
    C14Component,
    C15Component,
    Lista1PersonasComponent,
    Mayuscula1Pipe,
    FormularioPersonaComponent,
    DetallePersonaComponent,
    EditarPersonaComponent,
    DialogoComponent,
    FormularioValidacionComponent,
    PadreComponent,
    HijoComponent,

    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatListModule,
    MatRadioModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatDialogModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
