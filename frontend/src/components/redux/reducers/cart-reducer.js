import { ADD_ITEM, TOGGLE_DESCRIPTION } from "../actions/cart-actions";


const initialState = {
    itemInCarts: [],

    cartCount: 0,

    descriptionBool: false,
}


export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case (ADD_ITEM):
            const insertion = { ...action.payload, frequency: 1 };
            const found = state.itemInCarts.find(n=> n.book_id === insertion.book_id);
            if (found) {
                return{...state, itemInCarts : state.itemInCarts.map(n=> {
                    if (n.book_id === found.book_id) {
                        return{...n, frequency : n.frequency + 1}
                    } else {
                        return n;
                    }
                })}
            } else {
            return({...state, itemInCarts : [...state.itemInCarts, insertion]})
            }
        case (TOGGLE_DESCRIPTION):
            return ({ ...state, descriptionBool: !state.descriptionBool })
        default:
            return (state);
    }
}