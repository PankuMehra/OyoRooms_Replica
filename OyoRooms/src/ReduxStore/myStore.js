import { legacy_createStore } from "redux";
import { UserReducer } from "../Reducer/UserReducer";
import { combineReducers } from "redux";
import Reducer from "../Reducer/app/reducer";

let combinedReducer = combineReducers({UserReducer, Reducer}) 

export const myStore = legacy_createStore(combinedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
