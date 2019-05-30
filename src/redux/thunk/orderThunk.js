import { push } from 'react-router-redux';
import { 
    CREATE_ORDER_ACTIONS, 
    GET_ORDER_ACTIONS,
    DELIVERY_ORDER_ACTIONS,
    DELETE_ORDER_ACTIONS,
} from '../actions/orderAction'
import { orderUrl, apiHost } from '../../constans/api'
import apiErrorCatch from '../../utils/apiErrorCatch'

export const createOrder = (data) => {
    return dispatch => {
        dispatch(CREATE_ORDER_ACTIONS.start())
        fetch(`${apiHost}${orderUrl}`, {
            method: 'POST',
            headers: {
                "Content-type": 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(apiErrorCatch('Create order error'))
            .then(res => dispatch(CREATE_ORDER_ACTIONS.success(res)))
            .then(() => dispatch(push('/')))
            .catch(err => dispatch(CREATE_ORDER_ACTIONS.error(err)))
    }
}

export const getOrder = () => {
    return dispatch => {
        dispatch(GET_ORDER_ACTIONS.start())
        fetch(`${apiHost}${orderUrl}`)
            .then(apiErrorCatch('Get order error'))
            .then(res => dispatch(GET_ORDER_ACTIONS.success(res)))
            .catch(err => dispatch(GET_ORDER_ACTIONS.error(err)))
    }
}

export const delieryOrder = (id) => {
    return dispatch => {
        dispatch(DELIVERY_ORDER_ACTIONS.start())
        fetch(`${apiHost}${orderUrl}/delivery/${id}`)
            .then(apiErrorCatch('Delivery order error'))
            .then(res => dispatch(DELIVERY_ORDER_ACTIONS.success(res.status)))
            .catch(err => dispatch(DELIVERY_ORDER_ACTIONS.error(err)))
    }
}

export const deleteOrder = (id) => {
    return dispatch => {
        dispatch(DELETE_ORDER_ACTIONS.start())
        fetch(`${apiHost}${orderUrl}/delete/${id}`)
            .then(apiErrorCatch('Delete order error'))
            .then(res => dispatch(DELETE_ORDER_ACTIONS.success(res)))
            .catch(err => dispatch(DELETE_ORDER_ACTIONS.error(err)))
    }
}