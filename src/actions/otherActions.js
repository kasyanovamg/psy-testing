export const SET_GROUP = "other/SET_GROUP";

export const setTrackGroup = (group = "all") => ({
  type: SET_GROUP,
  payload: { group }
});