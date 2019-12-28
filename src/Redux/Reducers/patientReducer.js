import constants from '../constants'
/**
 * Reducer for patient actions
 */
const initState = { //initial patient state

    currentPage: 1,
    data: [],
    editing: false,
    errors: [],
    infoToEdit: [],
    modalInfo: {},
    open: false,
    detailOpen: false,
    editOpen: false,
    patientToEdit: {},
    patientsPerPage: 5,
    success: [],
    value: 0
}

/**
 * Actions reducers
 * @param {initState} state 
 * @param {Action being passed to be reduced} action 
 */
function patientReducer(state = initState, action) {
    switch (action.type) {
        case constants.SET_PATIENTS: {
            return Object.assign({}, state, {
                data: [...action.payload]
            })
        }
        case constants.SET_PATIENT_SUCCESS: {
            return Object.assign({}, state, {
                success: action.payload
            })
        }
        case constants.SET_VALUE: {
            return Object.assign({}, state, {
                value: action.payload
            })
        }
        case constants.HANDLE_MODAL: {
            return Object.assign({}, state, {
                open: action.payload
            })
        }
        case constants.HANDLE_DETAILS_MODAL: {
            return Object.assign({}, state, {
                detailOpen: action.payload
            })
        }
        case constants.HANDLE_EDIT_MODAL: {
            return Object.assign({}, state, {
                editOpen: action.payload
            })
        }
        case constants.HANDLE_EDITING: {
            return Object.assign({}, state, {
                editing: action.payload
            })
        }
        case constants.SET_MODAL_INFO: {
            return Object.assign({}, state, {
                modalInfo: action.payload
            })
        }
        case constants.SET_ERROR: {
            return Object.assign({}, state, {
                errors: action.payload
            })
        }
        default: {
            return state
        }
    }
}

export default patientReducer;