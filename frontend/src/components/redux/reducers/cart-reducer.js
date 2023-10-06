import { ADD_ITEM } from "../actions/cart-actions";


const initialState = {
    itemInCarts : [],

    cartCount : 0,
}


export const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case(ADD_ITEM) :
            return({...state, itemInCarts : [...state.itemInCarts, action.payload], cartCount : state.itemInCarts.length + 1});
        default : 
            return(state);
    }
}