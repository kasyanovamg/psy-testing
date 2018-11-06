import { combineReducers } from 'redux'
import {
    start,
    shulteError,
    shulteEnd,
    checkTime,
    errors,
} from './shulteReducers'

export const commonReducer = combineReducers({
    start,
    shulteError,
    shulteEnd,
    checkTime,
    errors,
})