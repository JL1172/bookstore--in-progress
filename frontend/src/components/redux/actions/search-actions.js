import axios from "axios";
import { fetchingBooks, fetchingBooksSuccess } from "./shop-actions";

export const CHANGE_HANDLER = "CHANGE_HANDLER";
export const GATHER_BOOKS = "GATHER_BOOKS";
export const FILTERED_RESULTS = "FILTERED_RESULTS"; 
export const SEARCH_MODE = "SEARCH_MODE";

export const fetchingBooksSuccessVariation = (filteredValueId) => dispatch => {
    if (filteredValueId) {
        dispatch(fetchingBooks(true));
        dispatch(searchMode(true))
        axios.get(`http://localhost:9000/api/books/${filteredValueId}`).then(res=> {
            dispatch(filteredResults(res.data)); 
        }).then(err=> console.error(err)); 
        setTimeout(() => {
            dispatch(fetchingBooks(false))
        }, 200);
    } else {
        dispatch(searchMode(false))
        dispatch(fetchingBooksSuccess())
    }
}


const filteredResults = (books) => { //eslint-ignore-line
    return{type : FILTERED_RESULTS, payload : books}
}


export const searchMode = (bool) => {
    return{type : SEARCH_MODE, payload : bool}
}





//these are with each other
export const successGatherBooks = () => dispatch => {
    axios.get(`http://localhost:9000/api/books?limit=all`).then(res=> {
        dispatch(gatherSearchOptions(res.data));
    }).catch(err => console.error(err)); 
} 

const gatherSearchOptions = (books) => {
    return{type : GATHER_BOOKS, payload : books}
}
//these are with each other

export const changeHandler = (value) => {
    return {type : CHANGE_HANDLER, payload : value}
}