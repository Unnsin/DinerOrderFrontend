import createObjectTypes from '../../utils/createObjectTypes'
import createObjectActions from '../../utils/createObjectActions'

export const CREATE_BUSKET_TYPES = createObjectTypes('Busket', 'Create busket')
export const GET_BUSKET_TYPES =  createObjectTypes('Busket', 'Get busket')
export const ADD_TO_BUSKET_TYPES =  createObjectTypes('Busket', 'Add to busket')
export const REMOVE_FROM_BUSKET_TYPES =  createObjectTypes('Busket', 'Remove from busket')

export const REMOVE_FROM_BUSKET_ACTIONS = createObjectActions(REMOVE_FROM_BUSKET_TYPES)
export const ADD_TO_BUSKET_ACTIONS = createObjectActions(ADD_TO_BUSKET_TYPES)
export const GET_BUSKET_ACTIONS = createObjectActions(GET_BUSKET_TYPES)
export const CREATE_BUSKET_ACTIONS = createObjectActions(CREATE_BUSKET_TYPES)
