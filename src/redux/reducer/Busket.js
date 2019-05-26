import { 
    CREATE_BUSKET_TYPES,
    GET_BUSKET_TYPES,
    ADD_TO_BUSKET_TYPES,
    REMOVE_FROM_BUSKET_TYPES
} from '../actions/busketAction'

const initialState = {
    createBusket: {
        loading: false,
        loaded: false,
        error: '',
    },
    getBusketById: {
        loading: false,
        loaded: false,
        error: '',
    },
    addToBusket: {
        loading: false,
        loaded: false,
        error: '',  
    },
    removeFromBusket: {
        loading: false,
        loaded: false,
        error: '',   
    },
    busket: {},
}

export default (state = initialState, { type, payload }) => {
    switch(type) {
        case CREATE_BUSKET_TYPES.START: {
            return {
                ...state,
                createBusket: {
                    ...state.createBusket,
                    loading: true,
                    loaded: false,
                    error: '',
                },
                busket: {},
            }
        }
        case CREATE_BUSKET_TYPES.SUCCESS: {
            return {
                ...state,
                createBusket: {
                    ...state.createBusket,
                    loading: false,
                    loaded: true,
                },
                busket: payload,
            }
        }
        case CREATE_BUSKET_TYPES.ERROR: {
            return {
                ...state,
                createBusket: {
                    ...state.createBusket,
                    loading: false,
                    loaded: false,
                    error: payload.message
                }
            }
        }
        case ADD_TO_BUSKET_TYPES.START: {
            return {
                ...state,
                addToBusket: {
                    ...state.addToBusket,
                    loading: true,
                    loaded: false,
                    error: '',
                }
            }
        }
        case ADD_TO_BUSKET_TYPES.SUCCESS: {
            return {
                ...state,
                addToBusket: {
                    ...state.addToBusket,
                    loading: false,
                    loaded: true,
                },
                busket: payload,
            }
        }
        case ADD_TO_BUSKET_TYPES.ERROR: {
            return {
                ...state,
                addToBusket: {
                    ...state.addToBusket,
                    loading: false,
                    loaded: false,
                    error: payload.message,
                }
            }
        }
        case REMOVE_FROM_BUSKET_TYPES.START: {
            return {
                ...state,
                removeFromBusket: {
                    ...state.remveFromBusket,
                    loading: true,
                    loaded: false,
                    error: '',
                }
            }
        }
        case REMOVE_FROM_BUSKET_TYPES.SUCCESS: {
            return {
                ...state,
                removeFromBusket: {
                    ...state.remveFromBusket,
                    loading: false,
                    loaded: true,
                    error: '',
                },
                busket: payload,
            }
        }
        case REMOVE_FROM_BUSKET_TYPES.ERROR: {
            return {
                ...state,
                removeFromBusket: {
                    ...state.remveFromBusket,
                    loading: false,
                    loaded: false,
                    error: payload.message,
                }
            }
        }
        case GET_BUSKET_TYPES.START: {
            return {
                ...state,
                getBusketById: {
                    ...state.getBusketById,
                    loading: true,
                    loaded: false,
                    error: '',
                }
            }
        }
        case GET_BUSKET_TYPES.SUCCESS: {
            return {
                ...state,
                getBusketById: {
                    ...state.getBusketById,
                    loading: false,
                    loaded: true,
                    error: '',
                },
                busket: payload
            }
        }
        case GET_BUSKET_TYPES.ERROR: {
            return {
                ...state,
                getBusketById: {
                    ...state.getBusketById,
                    loading: false,
                    loaded: false,
                    error: payload.message,
                }
            }
        }
        default:
            return {
                ...state,
            }
    }
}