import { combineReducers } from "redux";
import { shopReducer } from "./shop-reducer";


export const rootReducer = combineReducers({
    bookState : shopReducer,
})