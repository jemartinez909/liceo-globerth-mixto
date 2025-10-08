import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NosotrosRoutingModule } from './nosotros-routing.module';
import { Main } from './pages/main/main';
import { InicioModule } from '../inicio/inicio.module';




@NgModule({
  declarations: [
    Main
    
  ],
  imports: [
    CommonModule,
    NosotrosRoutingModule,
    InicioModule
  ]
})
export class NosotrosModule { }
