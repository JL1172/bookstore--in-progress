export const ADD_ITEM = "ADD_ITEM";
export const TOGGLE_DESCRIPTION = "TOGGLE_DESCRIPTION";

export const addItemToCart = (item) => {
    return {type : ADD_ITEM, payload : item}
}

export const toggleDescription = () => {
    return {type : TOGGLE_DESCRIPTION}
}