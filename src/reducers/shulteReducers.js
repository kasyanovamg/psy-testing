import { START_TRAINING } from '../actions/actionCreatorsStartButton';
import { CELL_CHECK, SHULTE_END, TIME_CHECK } from '../actions/actionCreatorsShulte';

export const start = (state = false, action) => {
    switch (action.type) {
        case START_TRAINING:
            return action.bool;

        default:
            return state;
    }
}

export const shulteError = (state = false, action) => {
    switch (action.type) {
        case CELL_CHECK:
            return action.bool;

        default:
            return state;
    }
}

export const shulteEnd = (state = false, action) => {
    switch (action.type) {
        case SHULTE_END:
            return action.bool;

        default:
            return state;
    }
}

export const checkTime = (state = 0, action) => {
    switch (action.type) {
        case TIME_CHECK:
            return action.time;

        default:
            return state;
    }
}