import createObjectTypes from '../../utils/createObjectTypes'
import createObjectActions from '../../utils/createObjectActions'

export const GET_PRODUCT_TYPES = createObjectTypes('Product', 'Get product')
export const CREATE_PRODUCT_TYPES = createObjectTypes('Product', 'Create product')
export const GET_PRODUCT_BY_ID_TYPES = createObjectTypes('Product', 'Get product by id')
export const UPLOAD_IMAGE_PRODUCT_TYPES = createObjectTypes('Product', 'Upload image product')
export const DELETE_PRODUCT_TYPES = createObjectTypes('Product', 'Delete product')

export const GET_PRODUCT_ACTIONS = createObjectActions(GET_PRODUCT_TYPES)
export const CREATE_PRODUCT_ACTIONS = createObjectActions(CREATE_PRODUCT_TYPES)
export const GET_PRODUCT_BY_ID_ACTIONS = createObjectActions(GET_PRODUCT_BY_ID_TYPES)
export const UPLOAD_IMAGE_PRODUCT_ACTIONS = createObjectActions(UPLOAD_IMAGE_PRODUCT_TYPES)
export const DELETE_PRODUCT_ACTIONS = createObjectActions(DELETE_PRODUCT_TYPES)