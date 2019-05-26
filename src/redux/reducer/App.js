import { LOGIN_TYPES, REGISTER_TYPES } from '../actions/authAction' 
import { IS_AUTH_TYPES } from '../actions/appAction'

const initialState = {
    loading: false,
    loaded: false,
    isAuth: false,
    error: '',
    token: '',
    errorType: '',
    isAuthObj: {
        loading: false,
        loaded: false,
    }
}

export default (state = initialState, { type, payload }) => {
    switch(type) {
        case LOGIN_TYPES.START: {
            return {
                ...state,
                loading: true,
                loaded: false,
                error: '',
            }
        }
        case LOGIN_TYPES.SUCCESS: {
            return {
                ...state,
                loading: false,
                loaded: true,
                isAuth: true,
                token: payload.token
            }
        }
        case LOGIN_TYPES.ERROR: {
            return {
                ...state,
                loading: false,
                loaded: false,
                isAuth: false,
                error: payload.message,
                errorType: 'login',
            }
        }
        case REGISTER_TYPES.START: {
            return {
                ...state,
                loading: true,
                loaded: false,
                error: '',
            }
        }
        case REGISTER_TYPES.SUCCESS: {
            return {
                ...state,
                loading: false,
                loaded: true,
                isAuth: true,
                token: payload.token,
            }
        }
        case REGISTER_TYPES.ERROR: {
            return {
                ...state,
                loading: false,
                loaded: false,
                isAuth: false,
                error: payload.message,
                errorType: 'register'
            }
        }
        case IS_AUTH_TYPES.START: {
            return {
                ...state,
                isAuthObj: {
                    ...state.isAuth,
                    loading: true,
                    loaded: false,
                }
            }
        }
        case IS_AUTH_TYPES.SUCCESS: {
            return {
                ...state,
                isAuthObj: {
                    ...state.isAuth,
                    loading: false,
                    loaded: true,
                },
                token: payload,
                isAuth: true,
            }
        }
        case IS_AUTH_TYPES.ERROR: {
            return {
                ...state,
                isAuthObj: {
                    ...state.isAuth,
                    loading: false,
                    loaded: false,
                },
                isAuth: false,
            }
        }
        default: 
            return state;
    }
}