import { combineReducers } from 'redux'
import {
    start,
    shulteError,
    shulteEnd,
    checkTime,
} from './shulteReducers'

export const commonReducer = combineReducers({
    start,
    shulteError,
    shulteEnd,
    checkTime,
})