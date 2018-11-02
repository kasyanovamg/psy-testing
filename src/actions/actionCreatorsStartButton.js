export const START_TRAINING = 'START_TRAINING';

export const start = (bool) => {
    return {
        type: START_TRAINING,
        bool
    };
}
export const startTraining = (training) => {
    return (dispatch) => {
        dispatch(start(training))
    };
}