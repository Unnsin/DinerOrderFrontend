import createObjectTypes from '../../utils/createObjectTypes'
import createObjectActions from '../../utils/createObjectActions'

export const IS_AUTH_TYPES = createObjectTypes('App', 'Is auth')

export const IS_AUTH_ACTIONS = createObjectActions(IS_AUTH_TYPES)