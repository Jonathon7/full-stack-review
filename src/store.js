import { createStore, applyMiddleware, combineReducers } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import productReducer from "./ducks/productReducer";

const rootReducer = combineReducers({
  productReducer
});

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));
