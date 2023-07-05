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
    C11Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
