import { GET_USER_OBJECT_TYPES } from '../actions/userAction'

const initialState = {
    getUserObject: {
        loading: false,
        loaded: false,
        error: '',
    },
    user: {}
}

export default (state = initialState, { type, payload }) => {
    switch(type) {
        case GET_USER_OBJECT_TYPES.START: 
            return {
                ...state,
                getUserObject: {
                    ...state.getUserObject,
                    loading: true,
                    loaded: false,
                    error: ''
                }
            }
        case GET_USER_OBJECT_TYPES.SUCCESS:
            return {
                ...state,
                getUserObject: {
                    ...state.getUserObject,
                    loading: false,
                    loaded: true,
                },
                user: payload
            }
        case GET_USER_OBJECT_TYPES.ERROR:
            return {
                ...state,
                getUserObject: {
                    ...state.getUserObject,
                    loading: false,
                    loaded: false,
                    error: payload.message,
                },
            }
        default: 
            return {
                ...state,
            }
    }
}