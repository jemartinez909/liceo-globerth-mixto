import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { VidaEscolarRoutingModule } from './vida-escolar-routing.module';
import { Main } from './pages/main/main';


@NgModule({
  declarations: [
    Main
  ],
  imports: [
    CommonModule,
    VidaEscolarRoutingModule,
    BrowserAnimationsModule
    
  ]
})
export class VidaEscolarModule { }
