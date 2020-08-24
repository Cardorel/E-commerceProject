import { SET_CURRENT_USER , SET_MODAL_LOGOUT,GET_ERROR_SIGNUP,HIDEN_ERROR_MESSAGE} from "../../TYPES";


const intialState = {
    currentUSer: null,
    logoutUser: false,
    errorMessage: '',
    hiddenAlertErrorMesssage: false
}


export const userReducer = (state = intialState , action) =>{
    switch (action.type) {
        case SET_CURRENT_USER:
           return{
               ...state,
               currentUser: action.payload
           }
           case SET_MODAL_LOGOUT:
               return{
                   ...state,
                   logoutUser: !state.logoutUser
               }
            case HIDEN_ERROR_MESSAGE:
                return{
                    hiddenAlertErrorMesssage: false,
                }
            case GET_ERROR_SIGNUP:
                return{
                   errorMessage: action.payload,
                   hiddenAlertErrorMesssage: true,
                }
        default:
           return state;
    }
}

