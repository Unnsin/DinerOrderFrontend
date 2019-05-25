export const GET_PRODUCT_TYPES = {
    START: 'Product| Get Product',
    SUCCESS: 'Product| Get product success',
    ERROR: 'Product| Get product error',
}

export const CREATE_PRODUCT_TYPES = {
    START: 'Product| Create product',
    SUCCESS: 'Product| Create product success',
    ERROR: 'Product| Create product error',
}

export const GET_PRODUCT_BY_ID_TYPES = {
    START: 'Product| Get product by id',
    SUCCESS: 'Product| Get product by id succes',
    ERROR: 'Product| Get product by id error',
}

// GET PRODUCT IMPLEMENTATION

export const getProductStart = (payload) => ({
    type: GET_PRODUCT_TYPES.START,
    payload,
}) 

export const getProductSuccess = (payload) => ({
    type: GET_PRODUCT_TYPES.SUCCESS,
    payload,
})

export const getProductError = (payload) => ({
    type: GET_PRODUCT_TYPES.ERROR,
    payload,
})

export const GET_PRODUCT_ACTIONS = {
    start: getProductStart,
    success: getProductSuccess,
    error: getProductError,
}

// CREATE PRODUCT IMPLEMENTATION

export const createProductStart = (payload) => ({
    type: CREATE_PRODUCT_TYPES.START,
    payload,
}) 

export const createProductSuccess = (payload) => ({
    type: CREATE_PRODUCT_TYPES.SUCCESS,
    payload,
})

export const createProductError = (payload) => ({
    type: CREATE_PRODUCT_TYPES.ERROR,
    payload,
})

export const CREATE_PRODUCT_ACTIONS = {
    start: createProductStart,
    success: createProductSuccess,
    error: createProductError,
}

// GET PRODUCT BY ID IMPLEMENTATION

export const getProductByIdStart = (payload) => ({
    type: GET_PRODUCT_BY_ID_TYPES.START,
    payload,
})

export const getProductByIdSuccess = (payload) => ({
    type: GET_PRODUCT_BY_ID_TYPES.SUCCESS,
    payload,
})

export const getProductByIdError = (payload) => ({
    type: GET_PRODUCT_BY_ID_TYPES.ERROR,
    payload
})

export const GET_PRODUCT_BY_ID_ACTIONS = {
    start: getProductByIdStart,
    success: getProductByIdSuccess,
    error: getProductByIdError,
}