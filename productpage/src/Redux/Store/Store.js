import { legacy_createStore,combineReducers } from "redux";
import Reducer  from "../app/reducer";

let cr=combineReducers({Reducer})

export const Store = legacy_createStore(
  cr,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
console.log(Store);




