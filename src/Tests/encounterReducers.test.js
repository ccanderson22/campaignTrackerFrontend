import reducer from '../Redux/Reducers/encounterReducer'
import constants from '../Redux/constants'
/**
 * Encounter reducer tests
 */
const initState = {
    data: [],
    patEncounters: [],
    errors: [],
    modalInfo: {},
    addOpen: false,
    editOpen: false,
    editing: false,
    success: [],
}

const encounter = {
    name: 'bill',
    ssn: '123-23-1234'
};
const encounters = [{
    encounterId: 1,
    patientId: 1
}, {
    encounterId: 2,
    patientId: 1
}];
const error = 'bad touch'
const message = 'message'

describe('encounter reducer tests', () => {
    it('should test initial state', () => {
        expect(reducer(undefined, {})).toEqual(initState)
    })

    it('should set all encounters', () => {
        expect(reducer([], {
            type: constants.SET_ENCOUNTERS,
            payload: encounters
        })).toEqual({
            data: encounters
        })
    })

    it('should set editing', () => {
        expect(reducer([], {
            type: constants.SET_EDITING,
            payload: false
        })).toEqual({
            editing: false
        })
    })
    it('should set encounter errors', () => {
        expect(reducer([], {
            type: constants.SET_ENCOUNTERS_ERRORS,
            payload: error
        })).toEqual({
            errors: error
        })
    })
    it('should set an encounter success message', () => {
        expect(reducer([], {
            type: constants.SET_ENCOUNTER_SUCCESS,
            payload: message
        })).toEqual({
            success: message
        })
    })
    it('should handle edit modal', () => {
        expect(reducer([], {
            type: constants.SET_EDIT_OPEN,
            payload: false
        })).toEqual({
            editOpen: false
        })
    })
    it('should set encounter details', () => {
        expect(reducer([], {
            type: constants.SET_ENCOUNTER_DETAILS,
            payload: encounter
        })).toEqual({
            modalInfo: encounter
        })
    })
    it('should set patient encounters', () => {
        expect(reducer([], {
            type: constants.SET_PATIENT_ENCOUNTERS,
            payload: encounters
        })).toEqual({
            patEncounters: encounters
        })
    })
    it('should handle the add modal', () => {
        expect(reducer([], {
            type: constants.HANDLE_ADD_OPEN,
            payload: false
        })).toEqual({
            addOpen: false
        })
    })







})