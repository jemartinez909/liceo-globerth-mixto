import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmisionesRoutingModule } from './admisiones-routing.module';
import { Main } from './pages/main/main';


@NgModule({
  declarations: [
    Main
  ],
  imports: [
    CommonModule,
    AdmisionesRoutingModule
  ]
})
export class AdmisionesModule { }
