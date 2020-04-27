import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule , ReactiveFormsModule} from '@angular/forms' ;
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AltaAlumnosComponent } from './alta-alumnos/alta-alumnos.component';
import { PersonaComponent } from './formularios/reactivos/persona.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ProfesorComponent} from './formularios/reactivos/profesor/profesor.component';

@NgModule({
  declarations: [
    AppComponent,
    AltaAlumnosComponent,
    PersonaComponent,
    ProfesorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
