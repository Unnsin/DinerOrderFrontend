import { GET_USER_OBJECT_ACTIONS } from '../actions/userAction'
import apiErrorCatch from '../../utils/apiErrorCatch'
import { userUrl, apiHost } from '../../constans/api'

export const getUserObject = (userId) => {
    return dispatch => {
        dispatch(GET_USER_OBJECT_ACTIONS.start())
        fetch(`${apiHost}${userUrl}/${userId}`)
            .then(apiErrorCatch('Get user object error'))
            .then(res => dispatch(GET_USER_OBJECT_ACTIONS.success(res)))
            .catch(err => dispatch(GET_USER_OBJECT_ACTIONS.error(err)))
    }
} 