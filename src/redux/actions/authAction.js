import createObjectTypes from '../../utils/createObjectTypes'
import createObjectActions from '../../utils/createObjectActions'

export const LOGIN_TYPES = createObjectTypes('App', 'Login')
export const REGISTER_TYPES = createObjectTypes('App', 'Register')

export const LOGIN_ACTIONS = createObjectActions(LOGIN_TYPES)
export const REGISTER_ACTIONS = createObjectActions(REGISTER_TYPES)