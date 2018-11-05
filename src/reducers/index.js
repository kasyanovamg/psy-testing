import { combineReducers } from 'redux'
import {
    start,
    shulteError,
    shulteEnd,
} from './shulteReducers'


export const commonReducer = combineReducers({
    start,
    shulteError,
    shulteEnd,
})