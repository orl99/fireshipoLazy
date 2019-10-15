import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// importing the state
import { StoreModule } from '@ngrx/store';
import { reducer } from './../../reducers/tutorial.reducer';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';



@NgModule({
  declarations: [ReadComponent, CreateComponent, ListaTareasComponent],
  imports: [
    StoreModule.forRoot({
      tutorial: reducer
    }),
    CommonModule
  ]
})
export class NgrxTextModule { }
