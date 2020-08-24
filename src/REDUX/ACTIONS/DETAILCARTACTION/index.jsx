import {SET_DETAIL_CART} from '../../TYPES';


export const detailCartAction = cart => dispatch => (
    dispatch({
        type: SET_DETAIL_CART,
        payload: cart,
    })
)