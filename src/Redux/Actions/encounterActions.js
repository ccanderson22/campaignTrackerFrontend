import constants from '../constants'
/**
|--------------------------------------------------
| Encounter Actions
|--------------------------------------------------
*/

/**
 * Handles the open of the add form in encounters
 * @param {Boolean being passed} flag 
 */
export const handleAddOpen = (flag) => {
    return {
        type: constants.HANDLE_ADD_OPEN,
        payload: flag
    }
}
/**
 * Handles editing for an encounter on the encounter details modal
 * @param {boolean being passed} flag 
 */
export const setEditing = (flag) => {
    return{
        type: constants.SET_EDITING,
        payload: flag
    }
}
/**
 * handles the opening and closing of the edit modal
 * @param {boolean being passed} flag 
 */
export const setEditOpen = (flag) => {
    return{
        type: constants.SET_EDIT_OPEN,
        payload: flag
    }
}
/**
 * Sets all the encounters
 * @param {All encounters} data 
 */
export const setEncounters = (data) => {
    return {
        type: constants.SET_ENCOUNTERS,
        payload: data
    }
}
/**
 * Sets success messages
 * @param {message being passed} msg 
 */
export const setEncounterSuccess = (msg) => {
    return {
        type: constants.SET_ENCOUNTER_SUCCESS,
        payload: msg
    }
}
/**
 * Used mostly for the set encounter watch in the saga
 */
export const setEncountersAsync = () => {
    return {
        type: constants.SET_ENCOUNTERS_ASYNC,
    }
}
/**
 * Adds a new encounter
 * @param {New encounter being added} data 
 */
export const addNewEncounterAsync = (data) => {
    return{
        type: constants.ADD_NEW_ENCOUNTER_ASYNC,
        payload: data
    }
}
/**
 * Updated an encounter
 * @param {Updated encounter} data 
 */
export const updateEncounterAsync = (data) => {
    return {
        type: constants.UPDATE_ENCOUNTER_ASYNC,
        payload: data
    }
}
/**
 * Deletes an encounter
 * @param {Id of encounter to delete} id 
 */
export const deleteEncounterAsync = (id) => {
    return{
        type: constants.DELETE_ENCOUNTER_ASYNC,
        payload: id
    }
}
/**
 * Sets errors when they occur
 * @param {Error being set} err 
 */
export const setEncounterErrors = (err) => {
    return {
        type: constants.SET_ENCOUNTERS_ERRORS,
        payload: err
    }
}
/**
 * Sets the encounters for a specific patient
 * @param {Encounter for a specific patient} data 
 */
export const setPatientEncounter = (data) => {
    return {
        type: constants.SET_PATIENT_ENCOUNTERS,
        payload: data
    }
}
/**
 * Sets details for a selected encounter
 * @param {Encounter details for the modal} data 
 */
export const setEncounterDetails = (data) => {
    return {
        type: constants.SET_ENCOUNTER_DETAILS,
        payload: data
    }
}