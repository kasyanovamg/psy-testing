export const CELL_CHECK = 'CELL_CHECK';
export const SHULTE_END = 'SHULTE_END';

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