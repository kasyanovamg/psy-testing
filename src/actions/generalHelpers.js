export const SUBMIT_RESULT = "general/SUBMIT_RESULT";

export const submitResult = (result = {}) => ({
    type: SUBMIT_RESULT,
    payload: { result }
});