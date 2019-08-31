export const SUBMIT_PERCEPTION = "general/SUBMIT_PERCEPTION";
export const SUBMIT_SHULTE = "general/SUBMIT_SHULTE";
export const SUBMIT_SHULTE_RED = "general/SUBMIT_SHULTE_RED";

export const submitPerseption = (result = {}) => ({
    type: SUBMIT_PERCEPTION,
    payload: { result }
});

export const submitShulte = (result = {}) => ({
    type: SUBMIT_SHULTE,
    payload: { result }
});

export const submitShulteRed = (result = {}) => ({
    type: SUBMIT_SHULTE_RED,
    payload: { result }
});