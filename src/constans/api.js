export const host = 'http://localhost'
export const port = '8000'

export const apiHost = `${host}:${port}`

export const productUrl = '/api/products'
export const orderUrl = '/api/order'
export const userUrl = '/api/users'
export const loginUrl = '/api/auth/login'
export const registerUrl = '/api/auth/register'

export const productById = (id) => `${apiHost}${productUrl}/${id}`
export const orderById = (id) => `${apiHost}${orderUrl}/${id}`

