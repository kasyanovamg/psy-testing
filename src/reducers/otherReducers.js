import { combineReducers } from "redux";
import { SET_GROUP } from '../actions/otherActions';

export const group = (state = 'all', action) => {
  switch (action.type) {
    case SET_GROUP:
      return action.payload.group;
    default:
      return state;
  }
};

export default combineReducers({
  group
})