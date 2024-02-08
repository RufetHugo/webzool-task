import {combineReducers} from "redux";
import {
    categoryReducer,
} from "./index";

export const rootReducer = combineReducers({
    categories : categoryReducer,
});
