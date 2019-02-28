import { combineReducers } from "redux";
import { SET_TIME } from '../actions/testHelpers';
import { initState } from './projectReducer'

export const setTime = (state = initState, action) => {
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
