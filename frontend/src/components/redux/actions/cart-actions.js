export const ADD_ITEM = "ADD_ITEM";
export const TOGGLE_DESCRIPTION = "TOGGLE_DESCRIPTION";
export const REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART";

export const addItemToCart = (item) => {
    return {type : ADD_ITEM, payload : item}
}

export const toggleDescription = () => {
    return {type : TOGGLE_DESCRIPTION}
}

export const removeItem = (idOfItem) => {
    return {type : REMOVE_ITEM_FROM_CART, payload : idOfItem};
}

