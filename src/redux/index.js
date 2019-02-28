import { combineReducers, createStore } from "redux";
import app from "./reducers/app";

const reducer = combineReducers({
  app
});

const store = createStore(reducer);

export default store;
