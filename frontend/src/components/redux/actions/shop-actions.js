import axios from "axios";

export const FETCHING_BOOKS = "FETCHING_BOOKS";
export const GET_BOOKS = "GET_BOOKS";

export const SHOP_ON = "SHOP_ON";
export const PROFILE_ON = "PROFILE_ON";
export const HOME_ON = "HOME_ON";
export const FILTER_ON = "FILTER_ON";

export const fetchingBooksSuccess = (query) => dispatch => {
    if (!query) {
        dispatch(fetchingBooks(true));
        axios.get(`http://localhost:9000/api/books`).then(res => {
            dispatch(getBooks(res.data))
        }).catch(err => console.error(err.message))
        setTimeout(() => {
            dispatch(fetchingBooks(false))
        }, 200);
    } else {
        dispatch(fetchingBooks(true));
        axios.get(`http://localhost:9000/api/books${query}`).then(res => {
            dispatch(getBooks(res.data))
        }).catch(err => console.error(err.message))
        setTimeout(() => {
            dispatch(fetchingBooks(false))
        }, 200); 
    }
}


const fetchingBooks = (bool) => { //loading circle
    return { type: FETCHING_BOOKS, payload: bool };
}

const getBooks = (bookData) => { //eslint-disable-line
    return { type: GET_BOOKS, payload: bookData };
}







//asthetic functions
export const toggleHome = () => {
    return {type : HOME_ON}
}
//asthetic functions
export const toggleShop = () => {
    return {type : SHOP_ON}
}
//asthetic functions
export const toggleProfile = () => {
    return {type : PROFILE_ON}
}

//asthetic functions
export const toggleFilter = () => {
    return {type : FILTER_ON}
}