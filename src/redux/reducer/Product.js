import { 
    GET_PRODUCT_TYPES, 
    GET_PRODUCT_BY_ID_TYPES,
    CREATE_PRODUCT_TYPES,
} from '../actions/productAction'

const initialState = {
    getProducts: {
        loading: false,
        loaded: false,
        error: '',
    },
    createProducts: {
        loading: false,
        loaded: false,
        error: '',
    },
    getProductById: {
        loading: false,
        loaded: false,
        error: '',
    },
    products: [],
    productDetail: {}
}

export default (state = initialState, { type, payload }) => {
    switch(type) {
        case GET_PRODUCT_TYPES.START: 
            return {
                ...state,
                getProducts: {
                    ...state.getProducts,
                    loading: true,
                    loaded: false,
                    error: ''
                }
            }
        case GET_PRODUCT_TYPES.SUCCESS: 
            return {
                ...state,
                getProducts: {
                    ...state.getProducts,
                    loading: false,
                    loaded: true,
                    error: ''
                },
                products: payload.products,
            }
        case GET_PRODUCT_TYPES.ERROR: 
            return {
                ...state,
                getProducts: {
                    ...state.getProducts,
                    loading: false,
                    loaded: false,
                    error: payload.message,
                }
            }
        case GET_PRODUCT_BY_ID_TYPES.START: 
            return {
                ...state,
                getProductById: {
                    ...state.getProductById,
                    loading: true,
                    loaded: false,
                    error: '',
                }
            }
        case GET_PRODUCT_BY_ID_TYPES.SUCCESS:
            return {
                ...state,
                getProductById: {
                    ...state.getProductById,
                    loading: false,
                    loaded: true,
                    error: '',
                },
                productDetail: payload.product
            }
        case GET_PRODUCT_BY_ID_TYPES.ERROR: 
            return {
                ...state,
                getProductById: {
                    ...state.getProductById,
                    loading: false,
                    loaded: false,
                    error: payload.message,
                }
            }
        case CREATE_PRODUCT_TYPES.START:
            return {
                ...state,
                createProducts: {
                    ...state.createProducts,
                    loading: true,
                    loaded: false,
                    error: '',
                }
            }
        case CREATE_PRODUCT_TYPES.SUCCESS:
            return {
                ...state,
                createProducts: {
                    ...state.createProducts,
                    loading: false,
                    loaded: true,
                    error: '',
                }
            }
        case CREATE_PRODUCT_TYPES.ERROR: 
            return {
                ...state,
                createProducts: {
                    ...state.createProducts,
                    loading: false,
                    loaded: false,
                    error: payload.message,
                }
            }
        default: 
            return {
                ...state
            }
    }
}