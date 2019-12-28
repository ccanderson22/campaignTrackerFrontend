import reducer from '../Redux/Reducers/patientReducer'
import constants from '../Redux/constants'

/**
 * Test the patient reducer
 */

const initState = {
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

const patients = [{
    name: 'bill',
    ssn: '123-23-1234'
}, {
    name: 'bob',
    ssn: '123-32-1234'
}];
const newPatient = {
    name: 'Jake',
    ssn: '345-54-2345'
}
const error = 'bad touch'
const message = 'message'

describe('patient reducer tests', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initState)
    })
    it('should set the patients list', () => {
        expect(reducer([], {
            type: constants.SET_PATIENTS,
            payload: patients
        })).toEqual({
            data: patients
        })
    })
    it('should set a success message', () => {
        expect(reducer([], {
            type: constants.SET_PATIENT_SUCCESS,
            payload: message
        })).toEqual({
            success: message
        })
    })
    it('should set value', () => {
        expect(reducer([], {
            type: constants.SET_VALUE,
            payload: 1
        })).toEqual({
            value: 1
        })
    })
    it('should handle modal opening and closing', () => {
        expect(reducer([], {
            type: constants.HANDLE_MODAL,
            payload: false
        })).toEqual({
            open: false
        })
    })
    it('should handle the details modal', () => {
        expect(reducer([], {
            type: constants.HANDLE_DETAILS_MODAL,
            payload: false
        })).toEqual({
            detailOpen: false
        })
    })
    it('should handle the edit modal', () => {
        expect(reducer([], {
            type: constants.HANDLE_EDIT_MODAL,
            payload: false
        })).toEqual({
            editOpen: false
        })
    })
    it('should handle editing', () => {
        expect(reducer([], {
            type: constants.HANDLE_EDITING,
            payload: false
        })).toEqual({
            editing: false
        })
    })

    it('should set the modal info', () => {
        expect(reducer([], {
            type: constants.SET_MODAL_INFO,
            payload: newPatient
        })).toEqual({
            modalInfo: newPatient
        })
    })
    it('should set errors', () => {
        expect(reducer([], {
            type: constants.SET_ERROR,
            payload: error
        })).toEqual({
            errors: error
        })
    })








})