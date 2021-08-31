import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import currencyReducer from './currencyReducer';
import rateReducer from "./rateReducer";

let reducers = combineReducers ({
  currencyPage: currencyReducer,
  ratePage: rateReducer
})

type ReducersType = typeof reducers
export type AppStateType = ReturnType<ReducersType>

let store = createStore(reducers, applyMiddleware( thunkMiddleware ))

export default store;
