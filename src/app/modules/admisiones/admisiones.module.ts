import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmisionesRoutingModule } from './admisiones-routing.module';
import { Main } from './pages/main/main';
import { InicioModule } from '../inicio/inicio.module';

@NgModule({
  declarations: [
    Main
  ],
  imports: [
    CommonModule,
    AdmisionesRoutingModule,
    InicioModule
  ]
})
export class AdmisionesModule { }
