/*
 * All reducers should be defined here.
 */

import { saveProjectToLS } from '../utils';
import {
    State,
} from './types';

const defaultState: State = {};

function reducer(state: State = defaultState, action: Action): State {
    switch (action.type) {

        default:
            return state;
    }
}

export default reducer;
