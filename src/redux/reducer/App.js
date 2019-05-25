import { LOGIN_TYPES, REGISTER_TYPES } from '../actions/authAction' 

const initialState = {
    loading: false,
    loaded: false,
    isAuth: false,
    error: '',
    token: '',
    errorType: ''
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
        default: 
            return state;
    }
}