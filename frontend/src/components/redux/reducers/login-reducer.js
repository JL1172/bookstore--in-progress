import { CHANGE_HANDLER_FOR_LOGIN, LOGIN_HANDLER, MESSAGE_ERROR } from "../actions/login-actions";


const initialState = {
    loggedIn : false,

    username : "",
    password : "",

    message : "",
}

export const loginReducer = (state = initialState,action) => {
    switch(action.type) {
        case(LOGIN_HANDLER) :
            return ({...state, loggedIn : action.payload})
        case(CHANGE_HANDLER_FOR_LOGIN) :
            return({...state, [action.payload.name] : action.payload.value})
        case(MESSAGE_ERROR) :
            return({...state, message : action.payload})
        default : 
            return(state);
    }
}