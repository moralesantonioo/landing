import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciosRoutingModule } from './servicios-routing.module';
import { CapacitacionesComponent } from './capacitaciones/capacitaciones.component';
import { CursosTalleresComponent } from './cursos-talleres/cursos-talleres.component';
import { SaludMentalComponent } from './salud-mental/salud-mental.component';
import { TerapiaAdolecentesComponent } from './terapia-adolecentes/terapia-adolecentes.component';
import { TerapiaFamiliarComponent } from './terapia-familiar/terapia-familiar.component';
import { TerapiaIndividualComponent } from './terapia-individual/terapia-individual.component';
import { TerapiaInfantilComponent } from './terapia-infantil/terapia-infantil.component';
import { TerapiaParejaComponent } from './terapia-pareja/terapia-pareja.component';
import { MatButtonModule } from '@angular/material/button';
import { OrientacionVocacionalComponent } from './orientacion-vocacional/orientacion-vocacional.component';
import { TerapiaDependenciaEmocionalComponent } from './terapia-dependencia-emocional/terapia-dependencia-emocional.component';

const materialComponents = [
  MatButtonModule
]

@NgModule({
  declarations: [
    CapacitacionesComponent,
    CursosTalleresComponent,
    SaludMentalComponent,
    TerapiaAdolecentesComponent,
    TerapiaFamiliarComponent,
    TerapiaIndividualComponent,
    TerapiaInfantilComponent,
    TerapiaParejaComponent,
    OrientacionVocacionalComponent,
    TerapiaDependenciaEmocionalComponent
  ],
  imports: [
    CommonModule,
    ServiciosRoutingModule,
    ...materialComponents
  ]
})
export class ServiciosModule { }
