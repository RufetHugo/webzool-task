import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {rootReducer} from "../reducers/rootReducer";

const inithialState = {}
const store = createStore(
    rootReducer,
    inithialState,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;

