import { PERCEPTION_ERROR, PERCEPTION_CELL_CHECK, PERCEPTION_END } from '../actions/actionCreatorsPerceptionOne';

export const perceptionErrors = (state = 0, action) => {
    switch (action.type) {
        case PERCEPTION_ERROR:
            return state + action.error;

        default:
            return state;
    }
}

export const perceptionError = (state = false, action) => {
    switch (action.type) {
        case PERCEPTION_CELL_CHECK:
            return action.bool;

        default:
            return state;
    }
}

export const perceptionEnd = (state = false, action) => {
    switch (action.type) {
        case PERCEPTION_END:
            return action.bool;

        default:
            return state;
    }
}