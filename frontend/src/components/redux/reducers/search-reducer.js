import { CHANGE_HANDLER, FILTERED_RESULTS, GATHER_BOOKS, SEARCH_MODE } from "../actions/search-actions";


const initialState = {
    availableBooks : [],

    filteredValue : "",

    filteredBooks : [],

    filteringSearchResults : false,
}

export const searchReducer = (state = initialState,action) => {
    switch(action.type) {
        case(GATHER_BOOKS) :
            return({...state, availableBooks : action.payload})
        case(CHANGE_HANDLER) :
            return({...state, filteredValue : action.payload})
        case(SEARCH_MODE) :
            return({...state, filteringSearchResults : action.payload})
        case(FILTERED_RESULTS) :
            return({...state, filteredBooks : action.payload})
        default :
            return(state);
    }
} 