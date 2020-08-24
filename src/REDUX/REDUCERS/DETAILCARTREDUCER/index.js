import {SET_DETAIL_CART} from '../../TYPES';
import { detailPageCartItem } from '../CARTSREDUCER/CartItems.utils';


export const detailCartReducer = (state = {} , action) => {
    switch (action.type) {
        case SET_DETAIL_CART:
        return detailPageCartItem(action.payload);
        default:
            return state;
    }
}