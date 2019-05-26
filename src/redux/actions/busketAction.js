export const CREATE_BUSKET_TYPES = {
    START: 'Busket| Create busket start',
    SUCCESS: 'Busket| Create busket success',
    ERROR: 'Busket| Create busket error',
}

export const GET_BUSKET_TYPES = {
    START: 'Busket| Get busket start',
    SUCCESS: 'Busket| Get busket success',
    ERROR: 'Busket| Get busket error',
}

export const ADD_TO_BUSKET_TYPES = {
    START: 'Busket| Add to busket start',
    SUCCESS: 'Busket| Add to busket success',
    ERROR: 'Busket| Add to busket error',
}

export const REMOVE_FROM_BUSKET_TYPES = {
    START: 'Busket| Remove from busket start',
    SUCCESS: 'Busket| Remove from busket success',
    ERROR: 'Busket| Remove from busket error',
}

// REMOVE FROM BUSKET IMPLEMENTATION

export const removeFromBusketStart = (payload) => ({
    type: REMOVE_FROM_BUSKET_TYPES.START,
    payload,
})

export const removeFromBusketSuccess = (payload) => ({
    type: REMOVE_FROM_BUSKET_TYPES.SUCCESS,
    payload
})

export const removeFromBusketError = (payload) => ({
    type: REMOVE_FROM_BUSKET_TYPES.ERROR,
    payload,
})

export const REMOVE_FROM_BUSKET_ACTIONS = {
    start: removeFromBusketStart,
    success: removeFromBusketSuccess,
    error: removeFromBusketError,
}

// ADD TO BUSKET IMPLEMENTATION

export const addToBusketStart = (payload) => ({
    type: ADD_TO_BUSKET_TYPES.START,
    payload,
})

export const addToBusketSuccess = (payload) => ({
    type: ADD_TO_BUSKET_TYPES.SUCCESS,
    payload,
})

export const addToBusketError = (payload) => ({
    type: ADD_TO_BUSKET_TYPES.ERROR,
    payload
})

export const ADD_TO_BUSKET_ACTIONS = {
    start: addToBusketStart,
    success: addToBusketSuccess,
    error: addToBusketError,
}

// GET BUSKET IMPLEMENTATION

export const getBusketStart = (payload) => ({
    type: GET_BUSKET_TYPES.START,
    payload,
})

export const getBusketSuccess = (payload) => ({
    type: GET_BUSKET_TYPES.SUCCESS,
    payload,
})

export const getBusketError = (paylaod) => ({
    type: GET_BUSKET_TYPES.ERROR,
    paylaod,
})

export const GET_BUSKET_ACTIONS = {
    start: getBusketStart,
    success: getBusketSuccess,
    error: getBusketError,
}

// CREATE BUSKET IMPLEMENTATION

export const createBusketStart = (payload) => ({
    type: CREATE_BUSKET_TYPES.START,
    payload
})

export const createBusketSuccess = (payload) => ({
    type: CREATE_BUSKET_TYPES.SUCCESS,
    payload
})

export const createBusketError = (payload) => ({
    type: CREATE_BUSKET_TYPES.ERROR,
    payload
})

export const CREATE_BUSKET_ACTIONS = {
    start: createBusketStart,
    success: createBusketSuccess,
    error: createBusketError,
} 
