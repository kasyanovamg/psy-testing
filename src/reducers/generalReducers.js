import { combineReducers } from "redux";
import { SUBMIT_RESULT } from '../actions/generalHelpers';

export const submitResult = (state = {}, action) => {
    console.log(action)
    switch (action.type) {
        case SUBMIT_RESULT:
            return action.payload.currentTime;
        default:
            return state;
    }
};

export default combineReducers({
    submitResult
})
