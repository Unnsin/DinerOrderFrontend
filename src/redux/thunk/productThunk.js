import {
    GET_PRODUCT_ACTIONS,
    GET_PRODUCT_BY_ID_ACTIONS,
    CREATE_PRODUCT_ACTIONS,
} from '../actions/productAction'

import { apiHost, productUrl, productById } from '../../constans/api'

export const getProducts = () => {
    return (dispatch) => {
        dispatch(GET_PRODUCT_ACTIONS.start())
        fetch(`${apiHost}${productUrl}`)
            .then(res => {
                if (res.ok) {
                    return res
                } else {
                    throw { message: 'Get product error' }
                }
            })
            .then(res => res.json())
            .then(res => dispatch(GET_PRODUCT_ACTIONS.success({ products: res })))
            .catch(err => dispatch(GET_PRODUCT_ACTIONS.error(err)))
    }
}

export const getProductsById = (id) => {
    return (dispatch) => {
        dispatch(GET_PRODUCT_BY_ID_ACTIONS.start())
        fetch(productById(id))
            .then(res => {
                if(res.ok) {
                    return res 
                }  else {
                    throw { message: 'Get product by id' }
                }
            })
            .then(res => res.json())
            .then(res => dispatch(GET_PRODUCT_BY_ID_ACTIONS.success(res)))
            .catch(err => dispatch(GET_PRODUCT_BY_ID_ACTIONS.error(err)))
    }
}

export const createProduct = (data) => {
    return (dispatch) => {
        dispatch(CREATE_PRODUCT_ACTIONS.start())
            .then(res => {
                if (res.ok) {
                    return res
                } else {
                    throw { message: 'Create product error' }
                }
            })
            .then(res => res.json())
            .then(res => dispatch(CREATE_PRODUCT_ACTIONS.success(res)))
            .catch(err => dispatch(CREATE_PRODUCT_ACTIONS.error(err)))
    }
}