import axios from "axios";

export const FETCHING_BOOKS = "FETCHING_BOOKS";
export const GET_BOOKS = "GET_BOOKS";


export const fetchingBooksSuccess = (query) => dispatch => {
    dispatch(fetchingBooks(true));
    axios.get(`http://localhost:9000/api/books${query}`).then(res => {
        console.log(res)
    }).catch(err => console.error(err.message))
    setTimeout(() => {
        dispatch(fetchingBooks(false))
    }, 200);
}


const fetchingBooks = (bool) => { //loading circle
    return { type: FETCHING_BOOKS, payload: bool };
}

const getBooks = (bookData) => { //eslint-disable-line
    return { type: GET_BOOKS, payload: bookData };
}