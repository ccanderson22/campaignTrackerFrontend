import constants from '../constants'
/**
|--------------------------------------------------
| Patient Actions
|--------------------------------------------------
*/

/**
 * Sets all patient records
 * @param {Patient data} data 
 */
export const setPatients = (data) => {
    return{
        type: constants.SET_PATIENTS,
        payload: data
    }
}
/**
 * Sets success message
 * @param {message being passed} msg 
 */
export const setPatientSuccess = (msg) => {
    return{
        type: constants.SET_PATIENT_SUCCESS,
        payload: msg
    }
}
/**
 * 
 * @param {new patient to be added} data 
 */
export const addNewPatientAsync = (data) => {
    return{
        type: constants.ADD_NEW_PATIENT_ASYNC,
        payload: data
    }
}
/**
 * 
 * @param {updated patient info} data 
 */
export const updatePatientAsync = (data) => {
    return{
        type: constants.UPDATE_PATIENT_ASYNC,
        payload: data
    }
}
/**
 * Deletes a patient 
 * @param {ID of the patient you wish to delete} id 
 */
export const deletePatientAsync = (id) => {
    return{
        type: constants.DELETE_PATIENT_ASYNC,
        payload: id
    }
}
/**
 * Used for the set patient watch
 */
export const setPatientsAsync = () => {
    return{
        type: constants.SET_PATIENTS_ASYNC
    }
}
/**
 * Sets errors for when they occur
 * @param {error being passed} err 
 */
export const setError = (err) => {
    return {
        type: constants.SET_ERROR,
        payload: err
    }
}
/**
 * Sets the value for the navbar icons
 * @param {value for the navbar} val 
 */
export const setValue = (val) => {
    return {
        type: constants.SET_VALUE,
        payload: val
    }
}
/**
 * Sets information to be displayed in the modal
 * @param {Info to be displayed in the modal} data 
 */
export const setModalInfo = (data) => {
    return {
        type: constants.SET_MODAL_INFO,
        payload: data
    }
}
/**
 * Handles the opening and closing of the Add modal
 * @param {boolean being passed} flag 
 */
export const handleModal = (flag) => {
    return {
        type: constants.HANDLE_MODAL,
        payload: flag
    }
}
/**
 * Handles the opening and closing of the details modal
 * @param {boolean being passed} flag 
 */
export const handleDetailsModal = (flag) => {
    return {
        type: constants.HANDLE_DETAILS_MODAL,
        payload: flag
    }
}
/**
 *  Handles the opening and closing of the edit modal
 * @param {boolean being passed} flag 
 */
export const handleEditModal = (flag) => {
    return {
        type: constants.HANDLE_EDIT_MODAL,
        payload: flag
    }
}
/**
 * Handles if the modal should be in edit mode
 * @param {boolean being passed} flag 
 */
export const handleEditing = (flag) => {
    return {
        type: constants.HANDLE_EDITING,
        payload: flag
    }
}
