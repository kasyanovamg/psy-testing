import { combineReducers } from "redux";
import { SUBMIT_SHULTE } from '../actions/generalHelpers';

export const submitShulte = (state = {}, action) => {
    console.log(action.payload)
    switch (action.type) {
        case SUBMIT_SHULTE:
            return {
                ...state,
                time: action.payload.result.time,
                errors: action.payload.result.errors
            };
        default:
            return state;
    }
};

export default combineReducers({
    submitShulte
})
