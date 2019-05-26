import { IS_AUTH_ACTIONS } from '../actions/appAction'

export const isAuthAction = () => {
    return dispatch => {
        dispatch(IS_AUTH_ACTIONS.start())
        const token = localStorage.getItem('token')
        if (token) {
            dispatch(IS_AUTH_ACTIONS.success(token))
        } else {
            dispatch(IS_AUTH_ACTIONS.error())
        }
    }
}