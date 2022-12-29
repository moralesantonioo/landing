import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CapacitacionesComponent } from './capacitaciones/capacitaciones.component';
import { CursosTalleresComponent } from './cursos-talleres/cursos-talleres.component';
import { SaludMentalComponent } from './salud-mental/salud-mental.component';
import { TerapiaAdolecentesComponent } from './terapia-adolecentes/terapia-adolecentes.component';
import { TerapiaFamiliarComponent } from './terapia-familiar/terapia-familiar.component';
import { TerapiaIndividualComponent } from './terapia-individual/terapia-individual.component';
import { TerapiaInfantilComponent } from './terapia-infantil/terapia-infantil.component';
import { TerapiaParejaComponent } from './terapia-pareja/terapia-pareja.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'teparia-individual',
        component: TerapiaIndividualComponent
      },
      {
        path: 'teparia-de-parejas',
        component: TerapiaParejaComponent
      },
      {
        path: 'teparia-infantil',
        component: TerapiaInfantilComponent
      },
      {
        path: 'teparia-familiar',
        component: TerapiaFamiliarComponent
      },
      {
        path: 'teparia-para-adolecentes',
        component: TerapiaAdolecentesComponent
      },
      {
        path: 'cursos-talleres',
        component: CursosTalleresComponent
      },
      {
        path: 'capacitaciones',
        component: CapacitacionesComponent
      },
      {
        path: 'salud-mental',
        component: SaludMentalComponent
      },
      {
        path: '**',
        redirectTo: 'teparia-individual'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiciosRoutingModule { }
