import { SET_CURRENT_USER , GET_ERROR_SIGNUP ,HIDEN_ERROR_MESSAGE } from "../../TYPES"

export const SetCurrentUser = user => dispatch =>{
    return dispatch({
        type: SET_CURRENT_USER,
        payload: user
    })
}


export const GetErrorMessage = message => dispatch =>{
    return dispatch({
        type: GET_ERROR_SIGNUP,
        payload: message
    })
}

export const hiddenAlertErrorMessage = () => dispatch => {
    return dispatch({
        type: HIDEN_ERROR_MESSAGE,
    })
}