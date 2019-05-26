export const IS_AUTH_TYPES = {
    START: 'App| Is auth',
    SUCCESS: 'App| Is auth success',
    ERROR: 'App| Is auth error',
}

export const isAuth = (payload) => ({
    type: IS_AUTH_TYPES.START,
    payload,
})

export const isAuthSuccess = (payload) => ({
    type: IS_AUTH_TYPES.SUCCESS,
    payload,
})

export const isAuthError = (payload) => ({
    type: IS_AUTH_TYPES.ERROR,
    payload,
})

export const IS_AUTH_ACTIONS = {
    start: isAuth,
    success: isAuthSuccess,
    error: isAuthError,
}