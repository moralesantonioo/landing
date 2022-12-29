import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NosotrosRoutingModule } from './nosotros-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';

const materialComponents = [
  MatButtonModule
]

@NgModule({
  declarations: [
    QuienesSomosComponent
  ],
  imports: [
    CommonModule,
    NosotrosRoutingModule,
    ...materialComponents
  ]
})
export class NosotrosModule { }
