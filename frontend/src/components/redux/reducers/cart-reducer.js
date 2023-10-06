import { ADD_ITEM, TOGGLE_DESCRIPTION } from "../actions/cart-actions";


const initialState = {
    itemInCarts : [],

    cartCount : 0,

    descriptionBool : false,
}


export const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case(ADD_ITEM) :
            return({...state, itemInCarts : [...state.itemInCarts, action.payload], cartCount : state.itemInCarts.length + 1});
        case(TOGGLE_DESCRIPTION) :
            return({...state, descriptionBool : !state.descriptionBool})
            default : 
            return(state);
    }
}