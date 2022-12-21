import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './modules/home/home.component';
import { QuienesSomosComponent } from './modules/nosotros/quienes-somos/quienes-somos.component';
import { QueOfrecemosComponent } from './modules/nosotros/que-ofrecemos/que-ofrecemos.component';
import { TerapiaIndividualComponent } from './modules/servicios/terapia-individual/terapia-individual.component';
import { TerapiaParejaComponent } from './modules/servicios/terapia-pareja/terapia-pareja.component';
import { TerapiaFamiliarComponent } from './modules/servicios/terapia-familiar/terapia-familiar.component';
import { TerapiaInfantilComponent } from './modules/servicios/terapia-infantil/terapia-infantil.component';
import { TerapiaAdolecentesComponent } from './modules/servicios/terapia-adolecentes/terapia-adolecentes.component';
import { CursosTalleresComponent } from './modules/servicios/cursos-talleres/cursos-talleres.component';
import { CapacitacionesComponent } from './modules/servicios/capacitaciones/capacitaciones.component';
import { SaludMentalComponent } from './modules/servicios/salud-mental/salud-mental.component';


const materialComponents = [
  MatButtonModule
]

const modules = [
  HomeComponent,
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ...modules,
    QuienesSomosComponent,
    QueOfrecemosComponent,
    TerapiaIndividualComponent,
    TerapiaParejaComponent,
    TerapiaFamiliarComponent,
    TerapiaInfantilComponent,
    TerapiaAdolecentesComponent,
    CursosTalleresComponent,
    CapacitacionesComponent,
    SaludMentalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...materialComponents
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
