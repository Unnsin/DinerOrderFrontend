import { 
    CREATE_ORDER_TYPES, 
    GET_ORDER_TYPES,
    DELIVERY_ORDER_TYPES,
    DELETE_ORDER_TYPES,
} from '../actions/orderAction'

const initialState = {
    createOrder: {
        loading: false,
        loaded: false,
        error: '',
    },
    getOrder: {
        loading: false,
        loaded: false,
        error: '',  
    },
    deliveryOrder: {
        loading: false,
        loaded: false,
        error: '',
    },
    deleteOrder: {
        loading: false,
        loaded: false,
        error: '',
    },
    status: '',
    orders: []
}

export default (state = initialState, { type, payload }) => {
    switch(type) {
        case CREATE_ORDER_TYPES.START: 
            return {
                ...state,
                createOrder: {
                    ...state.createOrder,
                    loading: true,
                    loaded: false,
                    error: '',
                }
            }
        case CREATE_ORDER_TYPES.SUCCESS: 
            return {
                ...state,
                createOrder: {
                    ...state.createOrder,
                    loading: false,
                    loaded: true,
                    error: '',
                }
            }
        case CREATE_ORDER_TYPES.ERROR: 
            return {
                ...state,
                createOrder: {
                    ...state.createOrder,
                    loading: false,
                    loaded: false,
                    error: payload.message,
                }
            }
        case GET_ORDER_TYPES.START: 
            return {
                ...state,
                getOrder: {
                    ...state.getOrder,
                    loading: true,
                    loaded: false,
                    error: '',
                }
            }
        case GET_ORDER_TYPES.SUCCESS: 
            return {
                ...state,
                getOrder: {
                    ...state.getOrder,
                    loading: false,
                    loaded: true,
                    error: '',
                },
                orders: payload,
            }
        case GET_ORDER_TYPES.ERROR: 
            return {
                ...state,
                getOrder: {
                    ...state.getOrder,
                    loading: false,
                    loaded: false,
                    error: payload.message,
                }
            }
        case DELIVERY_ORDER_TYPES.START: 
            return {
                ...state,
                deliveryOrder: {
                    ...state.deliveryOrder,
                    loading: true,
                    loaded: false,
                    error: ''
                }
            }
        case DELIVERY_ORDER_TYPES.SUCCESS: 
            return {
                ...state,
                deliveryOrder: {
                    ...state.deliveryOrder,
                    loading: false,
                    loaded: true,   
                },
                status: payload,
            }
        case DELIVERY_ORDER_TYPES.ERROR:
            return {
                ...state,
                deliveryOrder: {
                    ...state.deliveryOrder,
                    loading: false,
                    loaded: false,
                    error: payload.message,  
                }
            }
        case DELETE_ORDER_TYPES.START:
            return {
                ...state,
                deleteOrder: {
                    ...state.deleteOrder,
                    loading: true,
                    loaded: false,
                    error: ''
                }
            }
        case DELETE_ORDER_TYPES.SUCCESS:
            return {
                ...state,
                deleteOrder: {
                    ...state.deleteOrder,
                    loading: false,
                    loaded: true,
                }
            }
        case DELETE_ORDER_TYPES.ERROR: 
            return {
                ...state,
                deleteOrder: {
                    ...state.deleteOrder,
                    loading: false,
                    loaded: false,
                    error: payload.message,
                }
            }
        default: 
            return {
                ...state,
            }
    }
}