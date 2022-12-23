import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { QueOfrecemosComponent } from './modules/nosotros/que-ofrecemos/que-ofrecemos.component';
import { QuienesSomosComponent } from './modules/nosotros/quienes-somos/quienes-somos.component';
import { CapacitacionesComponent } from './modules/servicios/capacitaciones/capacitaciones.component';
import { CursosTalleresComponent } from './modules/servicios/cursos-talleres/cursos-talleres.component';
import { SaludMentalComponent } from './modules/servicios/salud-mental/salud-mental.component';
import { TerapiaAdolecentesComponent } from './modules/servicios/terapia-adolecentes/terapia-adolecentes.component';
import { TerapiaFamiliarComponent } from './modules/servicios/terapia-familiar/terapia-familiar.component';
import { TerapiaIndividualComponent } from './modules/servicios/terapia-individual/terapia-individual.component';
import { TerapiaInfantilComponent } from './modules/servicios/terapia-infantil/terapia-infantil.component';
import { TerapiaParejaComponent } from './modules/servicios/terapia-pareja/terapia-pareja.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'nosotros/quienes-somos',
    component: QuienesSomosComponent
  },
  {
    path: 'nosotros/que-ofrecemos',
    component: QueOfrecemosComponent
  },
  {
    path: 'servicios/teparia-individual',
    component: TerapiaIndividualComponent
  },
  {
    path: 'servicios/teparia-de-parejas',
    component: TerapiaParejaComponent
  },
  {
    path: 'servicios/teparia-infantil',
    component: TerapiaInfantilComponent
  },
  {
    path: 'servicios/teparia-familiar',
    component: TerapiaFamiliarComponent
  },
  {
    path: 'servicios/teparia-para-adolecentes',
    component: TerapiaAdolecentesComponent
  },
  {
    path: 'servicios/cursos-talleres',
    component: CursosTalleresComponent
  },
  {
    path: 'servicios/capacitaciones',
    component: CapacitacionesComponent
  },
  {
    path: 'servicios/salud-mental',
    component: SaludMentalComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
