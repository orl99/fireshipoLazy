import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Componentes

//Modules
// import { VereficacionModule } from './modules/vereficacion/vereficacion.module';

const routes: Routes = [
  {
    path: 'verificacion' ,
    loadChildren: './modules/verificacion.module#VereficacionModule',
    // loadChildren : () => import('./modules/verificacion.module').then(m => m.VereficacionModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
