import { ADD_ITEM, REMOVE_ITEM_FROM_CART, TOGGLE_DESCRIPTION } from "../actions/cart-actions";


const initialState = {
    itemInCarts: [],

    cartCount: 0,

    descriptionBool: false,

    total: 0,
}


export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case (ADD_ITEM):
            const insertion = { ...action.payload, frequency: 1 };
            const found = state.itemInCarts.find(n => n.book_id === insertion.book_id);
            if (found) {
                return {
                    ...state, total: Number(state.total) + Number(insertion.book_price),
                    cartCount: state.cartCount + 1, itemInCarts: state.itemInCarts.map(n => {
                        if (n.book_id === found.book_id) {
                            return { ...n, frequency: n.frequency + 1 }
                        } else {
                            return n;
                        }
                    })
                }
            } else {
                return ({
                    ...state, total: Number(state.total) + Number(insertion.book_price),
                    cartCount: state.cartCount + 1, itemInCarts: [...state.itemInCarts, insertion]
                })
            }
        case (TOGGLE_DESCRIPTION):
            return ({ ...state, descriptionBool: !state.descriptionBool })



        case (REMOVE_ITEM_FROM_CART):
            if (action.payload === "all") {
                return ({ ...state, itemInCarts: [] })
            } else {
                const foundIndex = state.itemInCarts.findIndex(n => n.book_id === action.payload);
                if (foundIndex !== -1) {
                    const newState = [...state.itemInCarts];
                    newState.splice(foundIndex, 1);
                    return ({ ...state, itemInCarts: newState })
                } else {
                    return state;
                }
            }
        default:
            return (state);
    }
}