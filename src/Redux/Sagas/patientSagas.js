import {put, takeEvery, call} from 'redux-saga/effects'
import constants from '../constants'
import * as Api from '../api'
import {setPatients, setError, setPatientSuccess, handleModal, handleEditing} from '../Actions/patientActions'

/**
 * Sets patient data obtained from the fetch
 */
export function* setPatientsAsync() {
    try {
        const data = yield call(Api.fetchPatients);
        yield put(setPatients(data));
    } catch (err){
        if (err === 500){
            yield put(setError(constants.STATUS_500))
        } else if (err === 503){
            yield put(setError(constants.STATUS_503))
        } else if (err === 409){
            yield put(setError(constants.STATUS_409_PATIENT))
        } else if (err === 404){
            yield put(setError(constants.STATUS_404))
        } else if (err === 403){
            yield put(setError(constants.STATUS_403))
        } else if (err === 401){
            yield put(setError(constants.STATUS_401))
        } else if (err === 400){
            yield put(setError(constants.STATUS_400))
        } else {
            yield put(setError(constants.UNEXPECTED_ERROR))
        }
    }
}
/**
 * Adds a new patient to the database
 * @param {redux action holding new patient data} action 
 */
export function* addNewPatientAsync(action) {
    try {
        let patient = action.payload;

        yield call(Api.addNewPatient, patient)
        yield put(handleModal(false))
        yield put(setPatientSuccess(constants.PAT_SUCCESSFUL_ADD))
        const data = yield call(Api.fetchPatients);
        yield put(setPatients(data));
    } catch(err){
        if (err === 500){
            yield put(setError(constants.STATUS_500))
        } else if (err === 503){
            yield put(setError(constants.STATUS_503))
        } else if (err === 409){
            yield put(setError(constants.STATUS_409_PATIENT))
        } else if (err === 404){
            yield put(setError(constants.STATUS_404))
        } else if (err === 403){
            yield put(setError(constants.STATUS_403))
        } else if (err === 401){
            yield put(setError(constants.STATUS_401))
        } else if (err === 400){
            yield put(setError(constants.STATUS_400))
        } else {
            yield put(setError(constants.UNEXPECTED_ERROR))
        }
    }
}
/**
 * Updates an existing patient on the database
 * @param {Redux action holding the updated patient data} action 
 */
export function* updatePatientAsync(action) {
    try {
        let patient = action.payload;

        yield call(Api.updatePatient, patient)
        yield put(handleEditing(false))
        yield put(setPatientSuccess(constants.PAT_SUCCESSFUL_UPDATE))
    } catch(err){
        if (err === 500){
            yield put(setError(constants.STATUS_500))
        } else if (err === 503){
            yield put(setError(constants.STATUS_503))
        } else if (err === 409){
            yield put(setError(constants.STATUS_409_PATIENT))
        } else if (err === 404){
            yield put(setError(constants.STATUS_404))
        } else if (err === 403){
            yield put(setError(constants.STATUS_403))
        } else if (err === 401){
            yield put(setError(constants.STATUS_401))
        } else if (err === 400){
            yield put(setError(constants.STATUS_400))
        } else {
            yield put(setError(constants.UNEXPECTED_ERROR))
        }
    }
}
/**
 * Deletes an existing patient from the database
 * @param {Redux action holding the ID of the patient you want to delete} action 
 */
export function* deletePatientAsync(action) {
    try {
        
        yield call(Api.deletePatient, action.payload)
        const data = yield call(Api.fetchPatients);
        yield put(setPatients(data));
        yield put(setError(constants.PAT_SUCCESSFUL_DELETE))
        setTimeout(() => {
            window.location.href = constants.HOME_URL
        }, 500);
    } catch(err){
        if (err === 500){
            yield put(setError(constants.STATUS_500))
        } else if (err === 503){
            yield put(setError(constants.STATUS_503))
        } else if (err === 409){
            yield put(setError(constants.STATUS_409_PATIENT))
        } else if (err === 404){
            yield put(setError(constants.STATUS_404))
        } else if (err === 403){
            yield put(setError(constants.STATUS_403))
        } else if (err === 401){
            yield put(setError(constants.STATUS_401))
        } else if (err === 400){
            yield put(setError(constants.STATUS_400))
        } else {
            yield put(setError(constants.UNEXPECTED_ERROR))
        }
    }
}
/**
 * Watches for any of the above to be called
 */
export function* watchSetPatientsAsync() {
    yield takeEvery(constants.SET_PATIENTS_ASYNC, setPatientsAsync);
    yield takeEvery(constants.ADD_NEW_PATIENT_ASYNC, addNewPatientAsync);
    yield takeEvery(constants.UPDATE_PATIENT_ASYNC, updatePatientAsync);
    yield takeEvery(constants.DELETE_PATIENT_ASYNC, deletePatientAsync);
    
}