export const host = 'http://localhost'
export const port = '8000'

export const apiHost = `${host}:${port}`

export const productUrl = '/api/products'
export const orderUrl = '/api/order'
export const userUrl = '/api/users'
export const loginUrl = '/api/auth/login'
export const registerUrl = '/api/auth/register'
export const busketUrl = '/api/busket'
export const addBusketUrl = '/api/busket/add'
export const deleteBusketUrl = '/api/busket/delete'

export const busketById = (id) => `${apiHost}${busketUrl}/${id}`
export const productById = (id) => `${apiHost}${productUrl}/${id}`
export const orderById = (id) => `${apiHost}${orderUrl}/${id}`

