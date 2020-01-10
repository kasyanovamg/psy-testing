export const SUBMIT_PERCEPTION = "general/SUBMIT_PERCEPTION";
export const SUBMIT_SHULTE = "general/SUBMIT_SHULTE";
export const SUBMIT_SHULTE_RED = "general/SUBMIT_SHULTE_RED";
export const SUBMIT_COUNT = "general/SUBMIT_COUNT";
export const SUBMIT_MEMORY_WORDS = "general/SUBMIT_MEMORY_WORDS";
export const SUBMIT_RESULT = "general/SUBMIT_RESULT";
export const SET_GROUP = "general/SET_GROUP";
export const SET_ATTEMPT ="general/SET_ATTEMPT";

export const submitPerseption = (result = {}) => ({
  type: SUBMIT_PERCEPTION,
  payload: {result}
});

export const submitShulte = (result = {}) => ({
  type: SUBMIT_SHULTE,
  payload: {result}
});

export const submitShulteRed = (result = {}) => ({
  type: SUBMIT_SHULTE_RED,
  payload: {result}
});

export const submitCount = (result = {}) => ({
  type: SUBMIT_COUNT,
  payload: {result}
});

export const submitMemoryWords = (result = {}) => ({
  type: SUBMIT_MEMORY_WORDS,
  payload: {result}
});

export const submitResult = (result = {}) => ({
  type: SUBMIT_RESULT,
  payload: {result}
});

export const setGroup = (group = '') => ({
  type: SET_GROUP,
  payload: group
});

export const setAttempt = (attempt = 0) => ({
  type: SET_ATTEMPT,
  payload: attempt
});