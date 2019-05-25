export const LOGIN_TYPES = {
    START: 'APP| Login start',
    SUCCESS: 'APP| Login Success',
    ERROR: 'APP| Login Error',
}

export const REGISTER_TYPES = {
    START: 'APP| Register Start',
    SUCCESS: 'APP| Register Success',
    ERROR: 'APP| Register Error',
}

// REGISTER ACTIONS IMPLEMENTATION

export const registerStart = (payload) => ({
    type: REGISTER_TYPES.START,
    payload
})

export const registerError = (payload) => ({
    type: REGISTER_TYPES.ERROR,
    payload,
})

export const registerSuccess = (payload) => ({
    type: REGISTER_TYPES.SUCCESS,
    payload,
})

// LOGIN ACTIONS IMPLEMENTATION

export const loginStart = (payload) => ({
    type: LOGIN_TYPES.START,
    payload
})

export const loginSuccess = (payload) => ({
    type: LOGIN_TYPES.SUCCESS,
    payload
})

export const loginError = (payload) => ({
    type: LOGIN_TYPES.ERROR,
    payload
})

export const LOGIN_ACTIONS = {
    start: loginStart,
    success: loginSuccess,
    error: loginError,
}

export const REGISTER_ACTIONS = {
    start: registerStart,
    success: registerSuccess,
    error: registerError
}