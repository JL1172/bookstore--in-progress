import { FETCHING_BOOKS, FILTER_ON, GET_BOOKS, HOME_ON, PROFILE_ON, SHOP_ON } from "../actions/shop-actions";


const initialState = {
    books : [],
    spinnerOn : false,
    page : "",

    shopOn : false,
    homeOn : true,
    profileOn : false,

    filterOn : false,
}

export const shopReducer = (state = initialState,action) => {
    switch(action.type) {
        case(FETCHING_BOOKS) :
            return({...state, spinnerOn : action.payload});
        case(GET_BOOKS) :
            return({...state, books : action.payload.result, page : Number(action.payload.page)})
        case(HOME_ON) :
            return({...state, homeOn  : true, shopOn : false, profileOn : false})
        case(PROFILE_ON) :
            return({...state, homeOn  : false, shopOn : false, profileOn : true})
        case(SHOP_ON) :
            return({...state, homeOn  : false, shopOn : true, profileOn : false})
        case(FILTER_ON) :
            return({...state, filterOn : !state.filterOn})
        default : 
            return (state);
    }
}