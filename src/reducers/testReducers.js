import { combineReducers } from "redux";
import { SET_TIME } from '../actions/testHelpers';

export const setTime = (state = 0, action) => {
    console.log(action)
    switch (action.type) {
        case SET_TIME:
            return action.payload.currentTime;
        default:
            return state;
    }
};

export default combineReducers({
    setTime
})
