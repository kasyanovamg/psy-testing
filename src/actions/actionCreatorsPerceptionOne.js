export const PERCEPTION_ERROR = 'PERCEPTION_ERROR';
export const PERCEPTION_CELL_CHECK = 'PERCEPTION_CELL_CHECK';
export const PERCEPTION_END = 'PERCEPTION_END';

export const perceptionErrorCount = (error) => {
    return {
        type: PERCEPTION_ERROR,
        error
    };
}
export const perceptionErrorCounter = (error) => {
    return (dispatch) => {
        dispatch(perceptionErrorCount(error))
    };
}

export const perceptionError = (bool) => {
    return {
        type: PERCEPTION_CELL_CHECK,
        bool
    };
}
export const getPerceptionError = (bool) => {
    return (dispatch) => {
        dispatch(perceptionError(bool))
    };
}

export const perceptionEnd = (bool) => {
    return {
        type: PERCEPTION_END,
        bool
    };
}
export const checkPerceptionEnd = (bool) => {
    return (dispatch) => {
        dispatch(perceptionEnd(bool))
    };
}
