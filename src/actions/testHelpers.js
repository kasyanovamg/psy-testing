export const SET_TIME = "current/SET_TIME";

export const setTime = (currentTime = "") => ({
    type: SET_TIME,
    payload: { currentTime }
});