import { Component, OnInit } from '@angular/core';

//Importing state
import { Store } from '@ngrx/store';
import { Tutorial } from './../../../models/tutorial.model';
import { ngrxState } from './../ngrx.state';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {
  // Importing observable
  tutorials: Observable<Tutorial[]>;

  // Constructor
  constructor( private store: Store<ngrxState> ) {
    this.tutorials = store.select('tutorial');
   }

  ngOnInit() {
  }

}
