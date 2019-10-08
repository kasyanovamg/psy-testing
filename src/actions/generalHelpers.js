export const SUBMIT_PERCEPTION = "general/SUBMIT_PERCEPTION";
export const SUBMIT_SHULTE = "general/SUBMIT_SHULTE";
export const SUBMIT_SHULTE_RED = "general/SUBMIT_SHULTE_RED";
export const SUBMIT_COUNT = "general/SUBMIT_COUNT";
export const SUBMIT_MEMORY_WORDS = "general/SUBMIT_MEMORY_WORDS";
export const SUBMIT_MEMORY_IMAGES = "general/SUBMIT_MEMORY_IMAGES";
export const SUBMIT_RESULT = "general/SUBMIT_RESULT";

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

export const submitMemoryImages = (result = {}) => ({
  type: SUBMIT_MEMORY_IMAGES,
  payload: {result}
});

export const submitResult = (result = {}) => ({
  type: SUBMIT_RESULT,
  payload: {result}
})