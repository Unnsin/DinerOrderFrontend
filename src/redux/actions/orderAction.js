export const CREATE_ORDER_TYPES = {
    START: 'Order| Create order start',
    SUCCESS: 'Order| Create order success',
    ERROR: 'Order| Create order error',
}

export const GET_ORDER_TYPES = {
    START: 'Order| Get order start',
    SUCCESS: 'Order| Get order success',
    ERROR: 'Order| Get order error',
}

export const DELIVERY_ORDER_TYPES = {
    START: 'Order| Delivery order start',
    SUCCESS: 'Order| Delivery order success',
    ERROR: 'Order| Delivery order error',
}

export const deliveryOrderStart = (payload) => ({
    type: DELIVERY_ORDER_TYPES.START,
    payload
})

export const deliveryOrderSuccess = (payload) => ({
    type: DELIVERY_ORDER_TYPES.SUCCESS,
    payload,
})

export const deliveryOrderError = (payload) => ({
    type: DELIVERY_ORDER_TYPES.ERROR,
    payload,
})

export const DELIVERY_ORDER_ACTIONS = {
    start: deliveryOrderStart,
    success: deliveryOrderSuccess,
    error: deliveryOrderError,
}

export const getOrderStart = (payload) => ({
    type: GET_ORDER_TYPES.START,
    payload
})

export const getOrderSuccess = (payload) => ({
    type: GET_ORDER_TYPES.SUCCESS,
    payload
}) 

export const getOrderError = (payload) => ({
    type: GET_ORDER_TYPES.ERROR,
    payload,
})

export const GET_ORDER_ACTIONS = {
    start: getOrderStart,
    success: getOrderSuccess,
    error: getOrderError,
} 

export const createOrderStart = (payload) => ({
    type: CREATE_ORDER_TYPES.START,
    payload,
})

export const createOrderSuccess = (payload) => ({
    type: CREATE_ORDER_TYPES.SUCCESS,
    payload,
})

export const createOrderError = (payload) => ({
    type: CREATE_ORDER_TYPES.ERROR,
    payload,
})

export const CREATE_ORDER_ACTIONS = {
    start: createOrderStart,
    success: createOrderSuccess,
    error: createOrderError,
}

