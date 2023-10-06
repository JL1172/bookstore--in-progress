export const ADD_ITEM = "ADD_ITEM";


export const addItemToCart = (item) => {
    return {type : ADD_ITEM, payload : item}
}