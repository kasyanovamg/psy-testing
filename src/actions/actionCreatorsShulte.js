export const CELL_CHECK = 'CELL_CHECK';
export const SHULTE_END = 'SHULTE_END';
export const TIME_CHECK = 'TIME_CHECK';
export const SHULTE_ERROR = 'SHULTE_ERROR';

export const shulteError = (bool) => {
    return {
        type: CELL_CHECK,
        bool
    };
}
export const getShulteError = (bool) => {
    return (dispatch) => {
        dispatch(shulteError(bool))
    };
}

export const shulteEnd = (bool) => {
    return {
        type: SHULTE_END,
        bool
    };
}
export const checkShulteEnd = (bool) => {
    return (dispatch) => {
        dispatch(shulteEnd(bool))
    };
}

export const setTime = (time) => {
    return {
        type: TIME_CHECK,
        time
    };
}
export const checkTime = (time) => {
    return (dispatch) => {
        dispatch(setTime(time))
    };
}

export const shulteErrorCount = (error) => {
    return {
        type: SHULTE_ERROR,
        error
    };
}
export const shulteErrorCounter = (error) => {
    return (dispatch) => {
        dispatch(shulteErrorCount(error))
    };
}