import { combineReducers } from "redux";
import { shopReducer } from "./shop-reducer";
import { cartReducer } from "./cart-reducer";


export const rootReducer = combineReducers({
    bookState : shopReducer,
    cartState : cartReducer,
})