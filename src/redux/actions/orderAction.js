import createObjectTypes from '../../utils/createObjectTypes'
import createObjectActions from '../../utils/createObjectActions'

export const CREATE_ORDER_TYPES = createObjectTypes('Order', 'Create order')
export const GET_ORDER_TYPES =  createObjectTypes('Order', 'Get order')
export const DELIVERY_ORDER_TYPES =  createObjectTypes('Order', 'Delivery order')
export const DELETE_ORDER_TYPES = createObjectTypes('Order', 'Delete order')

export const DELIVERY_ORDER_ACTIONS = createObjectActions(DELIVERY_ORDER_TYPES)
export const GET_ORDER_ACTIONS = createObjectActions(GET_ORDER_TYPES)
export const CREATE_ORDER_ACTIONS = createObjectActions(CREATE_ORDER_TYPES)
export const DELETE_ORDER_ACTIONS = createObjectActions(DELETE_ORDER_TYPES)