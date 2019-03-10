export const SUBMIT_SHULTE = "general/SUBMIT_SHULTE";

export const submitResult = (result = {}) => ({
    type: SUBMIT_SHULTE,
    payload: { result }
});