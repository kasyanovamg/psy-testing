import { combineReducers } from 'redux'
import {
    start,
    shulteError,
    shulteEnd,
    checkTime,
    shulteErrors,
} from './shulteReducers'
import {
    perceptionErrors,
    perceptionError,
    perceptionEnd,
} from './perceptionReducers'

export const commonReducer = combineReducers({
    start,
    shulteError,
    shulteEnd,
    checkTime,
    shulteErrors,
    perceptionErrors,
    perceptionError,
    perceptionEnd,
})