import {persistCombineReducers} from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
import {
  SUBMIT_COUNT,
  SUBMIT_MEMORY_WORDS,
  SUBMIT_PERCEPTION,
  SUBMIT_SHULTE,
  SUBMIT_SHULTE_RED,
  SUBMIT_RESULT,
  SET_GROUP,
  SET_ATTEMPT,
} from '../actions/generalHelpers';

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

export const countResult = (state = {}, action) => {
  switch (action.type) {
    case SUBMIT_COUNT:
      return {
        ...state,
        result: action.payload.result,
      };
    default:
      return state;
  }
};

export const memoryWordsResult = (state = {}, action) => {
  switch (action.type) {
    case SUBMIT_MEMORY_WORDS:
      return {
        ...state,
        result: action.payload.result,
      };
    default:
      return state;
  }
};

export const generalResult = (state = {}, action) => {
  switch (action.type) {
    case SUBMIT_RESULT:
      return {
        ...state,
        [action.payload.result.name]: action.payload.result.finalScore,
      };
    default:
      return state;
  }
};


export const group = (state = '', action) => {
  switch (action.type) {
    case SET_GROUP:
      return action.payload;
    default:
      return state;
  }
};


export const attempt = (state = 0, action) => {
  switch (action.type) {
    case SET_ATTEMPT:
      return action.payload;
    default:
      return state;
  }
};


export default persistCombineReducers(
  {
    key: 'psyTesting',
    storage: storageSession,
  },
  {
    perceptionResult,
    shulteResult,
    shulteRedResult,
    countResult,
    memoryWordsResult,
    group,
    attempt,
    generalResult,
  })
