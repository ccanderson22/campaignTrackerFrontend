import constants from '../constants';
/**
 * Encounter reducer
 */
const initState = { //initial encounter state
    data: [],
    patEncounters: [],
    errors: [],
    modalInfo: {},
    addOpen: false,
    editOpen: false,
    editing: false,
    success: [],
}
/**
 * 
 * @param {initState} state 
 * @param {Action being reduced} action 
 */
function encounterReducer(state = initState, action) {
    switch (action.type) {
        case constants.SET_ENCOUNTERS: {
            return Object.assign({}, state, {
                data: [...action.payload]
            })
        }
        case constants.SET_EDITING: {
            return Object.assign({}, state, {
                editing: action.payload
            })
        }
        case constants.SET_ENCOUNTERS_ERRORS: {
            return Object.assign({}, state, {
                errors: action.payload
            })
        }
        case constants.SET_ENCOUNTER_SUCCESS: {
            return Object.assign({}, state, {
                success: action.payload
            })
        }
        case constants.SET_EDIT_OPEN: {
            return Object.assign({}, state, {
                editOpen: action.payload
            })
        }
        case constants.SET_ENCOUNTER_DETAILS: {
            return Object.assign({}, state, {
                modalInfo: action.payload
            })
        }
        case constants.SET_PATIENT_ENCOUNTERS: {
            return Object.assign({}, state, {
                patEncounters: [...action.payload]
            })
        }
        case constants.HANDLE_ADD_OPEN: {
            return Object.assign({}, state, {
                addOpen: action.payload
            })
        }
        default: {
            return state
        }
    }
}

export default encounterReducer;