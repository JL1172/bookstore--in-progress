import { ADD_ITEM, DECREMENT_FREQ, REMOVE_ITEM_FROM_CART, TOGGLE_DESCRIPTION } from "../actions/cart-actions";


const initialState = {
    itemInCarts: [],

    cartCount: 0,

    descriptionBool: false,

    total: 0,
}


export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case (ADD_ITEM):

            action.payload.book_price = Number(action.payload.book_price.toFixed(2));
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
                return ({ ...state, itemInCarts: [], cartCount: 0, total: 0 })
            } else {
                if (state.cartCount === 1) {
                    return ({ ...state, itemInCarts: [], cartCount: 0, total: 0 })
                } else {
                const foundIndex = state.itemInCarts.findIndex(n => n.book_id === action.payload);
                const insertion1 = [...state.itemInCarts];


                const frequencyDrop = insertion1.at(foundIndex).frequency;
                const priceDrop = insertion1.at(foundIndex).book_price * frequencyDrop;


                insertion1.splice(foundIndex, 1);


                return ({
                    ...state, cartCount: state.cartCount - frequencyDrop, total: state.total - priceDrop,
                    itemInCarts: insertion1,
                })
            }
        }
        case (DECREMENT_FREQ):
            const foundIndex = state.itemInCarts.findIndex(n => n.book_id === action.payload);
            const insert = [...state.itemInCarts];

            const priceDrop = insert.at(foundIndex).book_price; //drop cart total


            insert.at(foundIndex).frequency = insert.at(foundIndex).frequency - 1;
            
                return({...state, cartCount : state.cartCount - 1, total : state.total - priceDrop, itemInCarts : insert})
        default:
            return (state);
    }
}