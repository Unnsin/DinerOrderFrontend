import createObjectTypes from '../../utils/createObjectTypes'
import createObjectActions from '../../utils/createObjectActions'

export const GET_USER_OBJECT_TYPES = createObjectTypes('User', 'Get user object')

export const GET_USER_OBJECT_ACTIONS = createObjectActions(GET_USER_OBJECT_TYPES)