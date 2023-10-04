import { FETCHING_BOOKS, GET_BOOKS } from "../actions/shop-actions";


const initialState = {
    books : [],
    spinnerOn : false,
}

export const shopReducer = (state = initialState,action) => {
    switch(action.payload) {
        case(FETCHING_BOOKS) :
            return({...state, spinnerOn : action.payload});
        case(GET_BOOKS) :
            return({...state, books : action.payload})
        default : 
            return (state);
    }
}