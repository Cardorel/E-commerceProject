import { SET_SHOP_DATA , LOADING_SHOP_DATA , FAILLURE_SHOP_DATA} from '../../TYPES';

const initState = {
    data : [],
    loading : true,
    error : ''
}

export const shopDataReducer = (state = initState , action) =>{
    switch (action.type) {
        case LOADING_SHOP_DATA:
            return {
                ...state,
                loading: true,
            }
        case SET_SHOP_DATA:
            return{
                ...state,
                data: action.payload,
                loading: false,
            }
        case FAILLURE_SHOP_DATA:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}