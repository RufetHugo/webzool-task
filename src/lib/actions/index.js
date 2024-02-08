import * as types from '../types/types';
import axios from "axios";

export const atCategories = (value) => async (dispatch) => {

    if (value.id) {
        try {
            const response = await axios.get(`http://64.226.66.94/api/categories`);
            dispatch({
                type: types.GET_CATEGORIES,
                payload: response.data
            });
        } catch (error) {
            console.error('Error!:', error);
        }
    } else {
        try {
            const response = await axios.get(`http://64.226.66.94/api/categories/${value.id}`);
            dispatch({
                type: types.GET_CATEGORIES,
                payload: response.data
            });
        } catch (error) {
            console.error('Error!:', error);
        }
    }
};

