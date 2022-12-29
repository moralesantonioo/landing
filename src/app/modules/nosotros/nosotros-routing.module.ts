import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'quienes-somos',
        component: QuienesSomosComponent
      },
      {
        path: '**',
        redirectTo: 'quienes-somos'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NosotrosRoutingModule { }
