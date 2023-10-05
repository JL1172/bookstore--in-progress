import { CHANGE_FILTER_HANDLER, FETCHING_BOOKS, FILTER_ON, GET_BOOKS, GET_BOOKS_VARIATION, HOME_ON, PROFILE_ON, REMOVE_FILTER, SHOP_ON } from "../actions/shop-actions";


const initialState = {
    books : [],
    spinnerOn : false,
    page : "",

    shopOn : false,
    homeOn : false,
    profileOn : false,

    filterOn : false,


    filterHead : "", 
    sortdir : "",

    radiosDisabled : true,
    
    removeFilterStatus : false,
}

export const shopReducer = (state = initialState,action) => {
    switch(action.type) {
        case(FETCHING_BOOKS) :
            return({...state, spinnerOn : action.payload});
        case(GET_BOOKS) :
            return({...state, books : action.payload.result, page : Number(action.payload.page), 
            })
        case(GET_BOOKS_VARIATION) :
            return({...state, books : action.payload.result, page : Number(action.payload.page), 
                removeFilterStatus : true,
            })
        case(HOME_ON) :
            return({...state, homeOn  : true, shopOn : false, profileOn : false})
        case(PROFILE_ON) :
            return({...state, homeOn  : false, shopOn : false, profileOn : true})
        case(SHOP_ON) :
            return({...state, homeOn  : false, shopOn : true, profileOn : false})
        case(FILTER_ON) :
            return({...state, filterOn : !state.filterOn});
        case(CHANGE_FILTER_HANDLER) :
            return({...state, [action.payload.name] : action.payload.value, radiosDisabled : false})
        case(REMOVE_FILTER) :
            return({...state, removeFilterStatus : false, filterHead : "", sortdir : ""})
        default : 
            return (state);
    }
}