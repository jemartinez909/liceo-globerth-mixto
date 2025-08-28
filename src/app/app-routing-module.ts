import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () =>
      import('./modules/inicio/inicio.module').then(m => m.InicioModule)
  },
  {
    path: 'nosotros',
    loadChildren: () =>
      import('./modules/nosotros/nosotros.module').then(m => m.NosotrosModule)
  },
  {
    path: 'admisiones',
    loadChildren: () =>
      import('./modules/admisiones/admisiones.module').then(m => m.AdmisionesModule)
  },
  {
    path: 'vida-escolar',
    loadChildren: () =>
      import('./modules/vida-escolar/vida-escolar.module').then(m => m.VidaEscolarModule)
  },
  { path: '**', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
