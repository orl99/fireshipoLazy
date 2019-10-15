import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'verificacion' ,
    loadChildren : () => import('./modules/vereficacion/vereficacion.module').then(m => m.VereficacionModule)
  },
  {
    path: 'ngrx' ,
    loadChildren : () => import('./modules/ngrx-text/ngrx-text.module').then(m => m.NgrxTextModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
