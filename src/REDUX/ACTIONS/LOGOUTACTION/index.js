import { SET_MODAL_LOGOUT } from "../../TYPES"

export const ToggleModalLogout = () => dispatch =>{
    return dispatch({
        type: SET_MODAL_LOGOUT
    })
}