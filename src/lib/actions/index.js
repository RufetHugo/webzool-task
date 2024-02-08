import * as types from '../types/types';

export const atCategories = (value) => async (dispatch) => {
    dispatch({
        type: types.GET_CATEGORIES,
        payload: value
    });
};

