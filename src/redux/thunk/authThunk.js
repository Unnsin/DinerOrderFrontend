import { push } from 'react-router-redux';
import { LOGIN_ACTIONS, REGISTER_ACTIONS } from '../actions/authAction'
import { apiHost, loginUrl, registerUrl } from '../../constans/api'
import apiErrorCatch from '../../utils/apiErrorCatch'
import localStorageApiCatch from '../../utils/localStorageApiCatch'

export const login = (email, password) => {
    return (dispatch) => {
        dispatch(LOGIN_ACTIONS.start())
        fetch(`${apiHost}${loginUrl}`, {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                email,
                password,
            })
        })
            .then(apiErrorCatch('Login error'))
            .then(res => res.json())
            .then(localStorageApiCatch('token'))
            .then(localStorageApiCatch('userId')) 
            .then(res => dispatch(LOGIN_ACTIONS.success(res)))
            .then(() => dispatch(push('/')))
            .catch(err => dispatch(LOGIN_ACTIONS.error(err)))
    }
}

export const register = (data) => {
    return (dispatch) => {
        dispatch(REGISTER_ACTIONS.start())
        fetch(`${apiHost}${registerUrl}`, {
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(apiErrorCatch('Register error'))
            .then(res => res.json())
            .then(localStorageApiCatch('token'))
            .then(res => dispatch(REGISTER_ACTIONS.success(res)))
            .then(() => dispatch(push('/')))
            .catch(err => dispatch(REGISTER_ACTIONS.error(err)))
    }
}