import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule , ReactiveFormsModule} from '@angular/forms' ;
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AltaAlumnosComponent } from './alta-alumnos/alta-alumnos.component';
import { PersonaComponent } from './formularios/reactivos/persona.component';


@NgModule({
  declarations: [
    AppComponent,
    AltaAlumnosComponent,
    PersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
