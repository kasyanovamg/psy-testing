import { START_TRAINING } from '../actions/actionCreatorsStartButton';

export const start = (state = false, action) => {
    switch (action.type) {
        case START_TRAINING:
            return action.bool;

        default:
            return state;
    }
}