export default {
    //patient constants
    HANDLE_MODAL: 'HANDLE_MODAL',
    HANDLE_DETAILS_MODAL: 'HANDLE_DETAILS_MODAL',
    HANDLE_EDIT_MODAL: 'HANDLE_EDIT_MODAL',
    HANDLE_EDITING: 'HANDLE_EDITING',
    SET_ERROR: 'SET_ERROR',
    SET_MODAL_INFO: 'SET_MODAL_INFO',
    SET_PATIENTS: 'SET_PATIENTS',
    SET_PATIENTS_ASYNC: 'SET_PATIENTS_ASYNC',
    SET_VALUE: 'SET_VALUE',
    ADD_NEW_PATIENT_ASYNC: 'ADD_NEW_PATIENT_ASYNC',
    UPDATE_PATIENT_ASYNC: 'UPDATE_PATIENT_ASYNC',
    DELETE_PATIENT_ASYNC: 'DELETE_PATIENT_ASYNC',
    SET_PATIENT_SUCCESS: 'SET_PATIENT_SUCCESS',

    //encounter constants
    SET_EDITING: 'SET_EDITING',
    SET_EDIT_OPEN: 'SET_EDIT_OPEN',
    SET_ENCOUNTERS: 'SET_ENCOUNTERS',
    SET_ENCOUNTER_DETAILS: 'SET_ENCOUNTER_DETAILS',
    SET_ENCOUNTERS_ASYNC: 'SET_ENCOUNTERS_ASYNC',
    SET_ENCOUNTERS_ERRORS: 'SET_ENCOUNTERS_ERRORS',
    SET_PATIENT_ENCOUNTERS: 'SET_PATIENT_ENCOUNTERS',
    HANDLE_ADD_OPEN: 'HANDLE_ADD_OPEN',
    ADD_NEW_ENCOUNTER_ASYNC: 'ADD_NEW_ENCOUNTER_ASYNC',
    UPDATE_ENCOUNTER_ASYNC: 'UPDATE_ENCOUNTER_ASYNC',
    DELETE_ENCOUNTER_ASYNC: 'DELETE_ENCOUNTER_ASYNC',
    SET_ENCOUNTER_SUCCESS: 'SET_ENCOUNTER_SUCCESS',
    
    //Status codes
    STATUS_400: 'Oops, something went wrong please try again',
    STATUS_401: 'You are not authorized to perform this action',
    STATUS_403: 'Forbidden, you shall not pass',
    STATUS_404: 'It seems we could not find what you were looking for, please try again later',
    STATUS_409: 'Conflict, please try again later',
    STATUS_409_PATIENT: 'Conflict: it seems a patient with that SSN already exists, please enter a new SSN and try again.',
    STATUS_500: 'Internal server error, please try again later.',
    STATUS_503: 'Database unavailable, please try again later',
    UNEXPECTED_ERROR: 'An unexpected error has occurred, please try again later.',

    //General messages
    PAT_SUCCESSFUL_DELETE: 'Patient successfully deleted',
    PAT_SUCCESSFUL_UPDATE: 'Patient successfully updated',
    PAT_SUCCESSFUL_ADD: "Successfully added new patient!",
    ENC_SUCCESSFUL_UPDATE: 'Encounter successfully updated',
    ENC_SUCCESSFUL_ADD: 'Encounter successfully added',
    
    HOME_URL: 'http://localhost:3000/'
    // DATABASE_URL: 


}