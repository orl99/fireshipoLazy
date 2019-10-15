import { Action } from '@ngrx/store';
import { Tutorial } from './../models/tutorial.model';
import * as TutorialActions from './../actions/tutorial.actions';

// Setting a initical State
// const intialState = {
//     name: 'Initial state',
//     url: 'http://google.com',
// }

// export interface State {
// };

const initialState: Tutorial = {
    name: 'Initial state',
    url: 'http://google.com',
};

// Creating the reducer

export function reducer(state: Tutorial[] = [initialState], action: TutorialActions.Actions ) {
    switch (action.type) {
        case TutorialActions.ADD_TUTORIAL:
            return [...state, action.payload] ;
        // case TutorialActions.REMOVE_TUTORIAL:
        //     return [...state, action.payload] ;
        default: {
            return state;
        }
    }
}