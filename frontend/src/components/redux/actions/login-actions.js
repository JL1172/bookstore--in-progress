import axios from "axios";

export const LOGIN_HANDLER = "LOGIN_HANDLER";
export const CHANGE_HANDLER_FOR_LOGIN = "CHANGE_HANDLER_FOR_LOGIN";
export const MESSAGE_ERROR = "MESSAGE_ERROR";


export const loginHandler = (status) => {
    return{type : LOGIN_HANDLER, payload : status}
}

export const changeHandlerForLogin = (bundledInput) => {
    return{type : CHANGE_HANDLER_FOR_LOGIN, payload : bundledInput}
}


export const loginInSubmission = (credentials) => dispatch => {
    axios.post("http://localhost:9000/api/login",credentials).then(res=> {
        window.localStorage.setItem("token",JSON.stringify(res.data.token)); 
        dispatch(loginHandler(true));
        dispatch(setErrorMessage(""))
    }).catch(err=> {
        dispatch(setErrorMessage(err.response.data.message)); 
    })
}

const setErrorMessage = (message) => {
    return {type : MESSAGE_ERROR, payload : message}
}