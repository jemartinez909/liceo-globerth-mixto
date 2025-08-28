import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { Home } from './pages/home/home';
import { Footer } from '../../components/footer/footer';

@NgModule({
  declarations: [
    Home,
    Footer
    
  ],
  imports: [
    CommonModule,
    InicioRoutingModule
  ]
})
export class InicioModule { }
