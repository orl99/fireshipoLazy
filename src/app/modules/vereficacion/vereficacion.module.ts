import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components Module
import { VeriOneComponent } from './veri-one/veri-one.component';
import { VerTwoComponent } from './ver-two/ver-two.component';
import { MainComponent } from './main/main.component';

//Router
import { Routes, RouterModule } from '@angular/router';

const veriRoutes: Routes = [
  { path: '', component: MainComponent }
];

@NgModule({
  declarations: [VeriOneComponent, VerTwoComponent, MainComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(veriRoutes),
  ]
})
export class VereficacionModule { }
