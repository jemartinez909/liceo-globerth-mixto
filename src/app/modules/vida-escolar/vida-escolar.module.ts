import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VidaEscolarRoutingModule } from './vida-escolar-routing.module';
import { Main } from './pages/main/main';


@NgModule({
  declarations: [
    Main
  ],
  imports: [
    CommonModule,
    VidaEscolarRoutingModule
  ]
})
export class VidaEscolarModule { }
