import { SET_CART_ITEM, CLEAR_CART_ITEM, DELETE_CART_ITEM } from "../../TYPES"


export const cartsAction = cart => dispatch => {
    return dispatch({
        type: SET_CART_ITEM,
        payload: cart
    })
}



export const clearItemCartAction = cart => dispatch => {
    return dispatch({
        type: CLEAR_CART_ITEM,
        payload: cart
    })
}


export const deleteItemCartAction = cart => dispatch => {
    return dispatch({
        type: DELETE_CART_ITEM,
        payload: cart
    })
}