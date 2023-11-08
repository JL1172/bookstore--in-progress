import axios from "axios";

export const FETCHING_BOOKS = "FETCHING_BOOKS";
export const GET_BOOKS = "GET_BOOKS";
export const CHANGE_FILTER_HANDLER = "CHANGE_FILTER_HANDLER";
export const REMOVE_FILTER = "REMOVE_FILTER"

export const GET_BOOKS_VARIATION = "GET_BOOKS_VARIATION";

export const SHOP_ON = "SHOP_ON";
export const PROFILE_ON = "PROFILE_ON";
export const HOME_ON = "HOME_ON";
export const FILTER_ON = "FILTER_ON";
export const CART_ON = "CART_ON";

export const fetchingBooksSuccess = (query,creds) => dispatch => {
    if (!query) {
        dispatch(fetchingBooks(true));
        axios.create({headers : {authorization : JSON.parse(window.localStorage.getItem("token"))}}).post(`http://localhost:7000/api/books`,creds).then(res => {
            dispatch(getBooks(res.data))
        }).catch(err => console.error(err.message))
        setTimeout(() => {
            dispatch(fetchingBooks(false))
        }, 200);
    } else {
        dispatch(fetchingBooks(true));
        axios.create({headers : {authorization : JSON.parse(window.localStorage.getItem("token"))}}).post(`http://localhost:7000/api/books${query}`,creds).then(res => {
            dispatch(getBooks(res.data))
        }).catch(err => console.error(err.message))
        setTimeout(() => {
            dispatch(fetchingBooks(false))
        }, 200); 
    }
}


export const fetchingBooksSuccessNo2 = (query,creds) => dispatch => {
    if (!query) {
        dispatch(fetchingBooks(true));
        axios.create({headers : {authorization : window.localStorage.getItem("token")}}).post(`http://localhost:7000/api/books`,creds).then(res => {
            dispatch(getBooksNo1(res.data))
        }).catch(err => console.error(err.message))
        setTimeout(() => {
            dispatch(fetchingBooks(false))
        }, 200);
    } else {
        dispatch(fetchingBooks(true));
        axios.create({headers : {authorization : JSON.parse(window.localStorage.getItem("token"))}}).post(`http://localhost:7000/api/books${query}`,creds).then(res => {
            dispatch(getBooksNo1(res.data))
        }).catch(err => console.error(err.message))
        setTimeout(() => {
            dispatch(fetchingBooks(false))
        }, 200); 
    }
}


export const fetchingBooks = (bool) => { //loading circle
    return { type: FETCHING_BOOKS, payload: bool };
}

const getBooks = (bookData) => { //eslint-disable-line
    return { type: GET_BOOKS, payload: bookData };
}


const getBooksNo1 = (bookData) => {
    return{type : GET_BOOKS_VARIATION, payload : bookData}
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
export const toggleCart = () => {
    return {type : CART_ON}
}


//form filter functions
export const changeValue = (changeBundler) => {
    return {type : CHANGE_FILTER_HANDLER, payload : changeBundler }
}
export const toggleRemoveFilter = () => {
    return {type : REMOVE_FILTER} 
}
//form filter functions