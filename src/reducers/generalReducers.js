import { combineReducers } from "redux";
import { SUBMIT_RESULT } from '../actions/generalHelpers';

export const submitResult = (state = {}, action) => {
    console.log("IM HERE!!!! ", action)
    switch (action.type) {
        case SUBMIT_RESULT:
            return {
                ...state,
                Shulte: action.payload.result
            };
        default:
            return state;
    }
};

export default combineReducers({
    submitResult
})
