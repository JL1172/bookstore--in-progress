import { FETCHING_BOOKS, GET_BOOKS } from "../actions/shop-actions";


const initialState = {
    books : [],
    spinnerOn : false,
    page : "",
}

export const shopReducer = (state = initialState,action) => {
    switch(action.type) {
        case(FETCHING_BOOKS) :
            return({...state, spinnerOn : action.payload});
        case(GET_BOOKS) :
            return({...state, books : action.payload.result, page : Number(action.payload.page)})
        default : 
            return (state);
    }
}