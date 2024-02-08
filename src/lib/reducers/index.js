import * as types from '../types/types'

const initialUser = {
    isLoggedIn: false,
    data: {},
};

const initialOrders = {
    data: [],
    page: {
        current: 1,
        per_page: 15,
        has_next: null,
        has_prev: null,
    }
}


export const categoryReducer = (categories = [], action) => {
    switch (action.type) {
        case types.GET_CATEGORIES:
            return action.payload;
        case types.GET_CATEGORIES_ERROR:
            return action.payload.message;
        default:
            return categories;
    }
}
