import { 
    GET_PRODUCT_TYPES, 
    GET_PRODUCT_BY_ID_TYPES,
    CREATE_PRODUCT_TYPES,
    UPLOAD_IMAGE_PRODUCT_TYPES,
    DELETE_PRODUCT_TYPES,
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
    uploadImage: {
        loading: false,
        loaded: false,
        error: '',
    },
    deleteProduct: {
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
        case UPLOAD_IMAGE_PRODUCT_TYPES.START:
            return {
                ...state,
                uploadImage: {
                    ...state.uploadImage,
                    loading: true,
                    loaded: false,
                    error: '',
                }
            }
        case UPLOAD_IMAGE_PRODUCT_TYPES.SUCCESS: 
            return {
                ...state,
                uploadImage: {
                    ...state.uploadImage,
                    loading: false,
                    loaded: true,
                }
            }
        case UPLOAD_IMAGE_PRODUCT_TYPES.ERROR: 
            return {
                ...state,
                uploadImage: {
                    ...state.uploadImage,
                    loading: false,
                    loaded: false,
                }
            }
        case DELETE_PRODUCT_TYPES.START:
            return {
                ...state,
                deleteProduct: {
                    ...state.deleteProduct,
                    loading: true,
                    loaded: false,
                    error: ''
                }
            }
        case DELETE_PRODUCT_TYPES.SUCCESS:
            return {
                ...state,
                deleteProduct: {
                    ...state.deleteProduct,
                    loading: false,
                    loaded: true,
                }
            }
        case DELETE_PRODUCT_TYPES.ERROR: 
            return {
                ...state,
                deleteProduct: {
                    ...state.deleteProduct,
                    loading: false,
                    loaded: false,
                }
            }
        default: 
            return {
                ...state
            }
    }
}