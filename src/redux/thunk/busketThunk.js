import { 
    CREATE_BUSKET_ACTIONS, 
    ADD_TO_BUSKET_ACTIONS, 
    REMOVE_FROM_BUSKET_ACTIONS, 
    GET_BUSKET_ACTIONS 
} from '../actions/busketAction'
import { 
    apiHost, 
    busketUrl, 
    busketById, 
    addBusketUrl, 
    deleteBusketUrl 
} from '../../constans/api'
import apiErrorCatch from '../../utils/apiErrorCatch'

export const createBusket = (userId) => {
    return dispatch => {
        dispatch(CREATE_BUSKET_ACTIONS.start())
        fetch(`${apiHost}${busketUrl}`, {
            method: "POST",
            headers: {
                "Content-type": "aplication/json",
            },
            body: JSON.stringify({
                userId
            })
        })
            .then(apiErrorCatch('Create busket error'))
            .then(res => res.json())
            .then(res => CREATE_BUSKET_ACTIONS.success(res))
            .catch(err => CREATE_BUSKET_ACTIONS.error(err))
    }
}

export const getBusketById = (userId) => {
    return dispatch => {
        dispatch(GET_BUSKET_ACTIONS.start())
        fetch(busketById(userId))
            .then(res => { 
                if(res.ok) {
                    return res;
                } else {
                    throw { message: 'Get busket by id error' }
                }
            })
                .then(apiErrorCatch('Get busket by id error'))
                .then(res => res.json())
                .then(res => dispatch(GET_BUSKET_ACTIONS.success(res)))
                .catch(err => dispatch(GET_BUSKET_ACTIONS.error(err)))

    }
}

export const addToBusket = (userId, productId) => {
    return dispatch => {
        dispatch(ADD_TO_BUSKET_ACTIONS.start())
        fetch(`${apiHost}${addBusketUrl}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                userId,
                productId,
            })
        })
            .then(apiErrorCatch('Add to busket error'))
            .then(res => res.json())
            .then(res => dispatch(ADD_TO_BUSKET_ACTIONS.success(res)))
            .catch(err => dispatch(ADD_TO_BUSKET_ACTIONS.error(err)))
    }
}

export const removeFromBusket = (userId, productId) => {
    return dispatch => {
        dispatch(REMOVE_FROM_BUSKET_ACTIONS.start())
        fetch(`${apiHost}${deleteBusketUrl}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                userId,
                productId,
            })
        })
            .then(apiErrorCatch('Remove from busket error'))
            .then(res => res.json())
            .then(res => dispatch(REMOVE_FROM_BUSKET_ACTIONS.success(res)))
            .catch(err => dispatch(REMOVE_FROM_BUSKET_ACTIONS.error(err)))
    }
}