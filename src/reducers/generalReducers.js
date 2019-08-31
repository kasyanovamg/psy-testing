import { combineReducers } from "redux";
import {SUBMIT_PERCEPTION, SUBMIT_SHULTE, SUBMIT_SHULTE_RED} from '../actions/generalHelpers';

export const perceptionResult = (state = {}, action) => {
    switch (action.type) {
        case SUBMIT_PERCEPTION:
            return {
                ...state,
                time: action.payload.result.time,
                errors: action.payload.result.errors
            };
        default:
            return state;
    }
};

export const shulteResult = (state = {}, action) => {
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

export const shulteRedResult = (state = {}, action) => {
    switch (action.type) {
        case SUBMIT_SHULTE_RED:
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
    perceptionResult,
    shulteResult,
    shulteRedResult
})
