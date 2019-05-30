import { push } from 'react-router-redux';
import {
    GET_PRODUCT_ACTIONS,
    GET_PRODUCT_BY_ID_ACTIONS,
    CREATE_PRODUCT_ACTIONS,
    UPLOAD_IMAGE_PRODUCT_ACTIONS,
    DELETE_PRODUCT_ACTIONS,
} from '../actions/productAction'
import apiErrorCatch from '../../utils/apiErrorCatch'
import { apiHost, productUrl, productById } from '../../constans/api'

export const getProducts = () => {
    return (dispatch) => {
        dispatch(GET_PRODUCT_ACTIONS.start())
        fetch(`${apiHost}${productUrl}`)
            .then(apiErrorCatch('Get product error'))
            .then(res => dispatch(GET_PRODUCT_ACTIONS.success({ products: res })))
            .catch(err => dispatch(GET_PRODUCT_ACTIONS.error(err)))
    }
}

export const getProductsById = (id) => {
    return (dispatch) => {
        dispatch(GET_PRODUCT_BY_ID_ACTIONS.start())
        fetch(productById(id))
            .then(apiErrorCatch('Get product by id error'))
            .then(res => dispatch(GET_PRODUCT_BY_ID_ACTIONS.success(res)))
            .catch(err => dispatch(GET_PRODUCT_BY_ID_ACTIONS.error(err)))
    }
}

export const createProduct = (data) => {
    return (dispatch) => {
        dispatch(CREATE_PRODUCT_ACTIONS.start())
        fetch(`${apiHost}${productUrl}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(apiErrorCatch('Create product error'))
            .then(res => dispatch(CREATE_PRODUCT_ACTIONS.success(res)))
            .then(() => dispatch(push('/menu')))
            .catch(err => dispatch(CREATE_PRODUCT_ACTIONS.error(err)))
    }
}

export const uploadProduct = (file) => {
    return dispatch => {
        const formData = new FormData()
        formData.append('image', file)
        dispatch(UPLOAD_IMAGE_PRODUCT_ACTIONS.start())
        fetch('https://api.imgur.com/3/image', {
            method: "POST",
            headers: {
                "Content-type": "multipart/form-data",
            },
            body: formData
        })
            .then(apiErrorCatch('Create product error'))
            .then(res => dispatch(UPLOAD_IMAGE_PRODUCT_ACTIONS.success(res)))
            .err(err => dispatch(UPLOAD_IMAGE_PRODUCT_ACTIONS.error(err)))
    }
}

export const deleteProduct = (id) => {
    return dispatch => {
        dispatch(DELETE_PRODUCT_ACTIONS.start())
        fetch(`${apiHost}${productUrl}/delete`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ id })
        })
            .then(apiErrorCatch('Create product error'))
            .then(res => dispatch(DELETE_PRODUCT_ACTIONS.success(res)))
            .then(() => dispatch(push('/menu')))
            .catch(err => dispatch(DELETE_PRODUCT_ACTIONS.error(err))) 
    }
}