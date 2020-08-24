import { SET_CART_ITEM, CLEAR_CART_ITEM, DELETE_CART_ITEM } from "../../TYPES";
import { addItemToCart, clearItemCart, DeleteItemCart } from "./CartItems.utils";

const initialState = {
    carts: [],
}

export const cartsReducer = (state = initialState , action) => {
    switch (action.type) {
        case SET_CART_ITEM:
          return {
              ...state,
              carts: addItemToCart(state.carts , action.payload)
          }
        case CLEAR_CART_ITEM:
            return{
                ...state,
                carts: clearItemCart(state.carts , action.payload),
            }
        case DELETE_CART_ITEM:
            return{
                ...state,
                carts: DeleteItemCart(state.carts, action.payload),
            }
        default:
            return state;
    }
}