import { combineReducers } from "redux";
import { shopReducer } from "./shop-reducer";
import { cartReducer } from "./cart-reducer";
import { searchReducer } from "./search-reducer";
import { loginReducer } from "./login-reducer";


export const rootReducer = combineReducers({
    bookState : shopReducer,
    cartState : cartReducer,
    searchState : searchReducer,
    loginState : loginReducer,
})