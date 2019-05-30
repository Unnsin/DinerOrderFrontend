export default (types) => ({
    start: (payload) => ({
        type: types.START,
        payload
    }),
    success: (payload) => ({
        type: types.SUCCESS,
        payload
    }),
    error: (payload) => ({
        type: types.ERROR,
        payload,
    })
})