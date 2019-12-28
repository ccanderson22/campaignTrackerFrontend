import {put, takeEvery, call} from 'redux-saga/effects'
import constants from '../constants'
import * as Api from '../api'
import {setEncounters, setEncounterErrors, setEncounterSuccess, handleAddOpen, setEditOpen } from '../Actions/encounterActions'


/**
 * Sets encounter data obtained from the fetch
 */
export function* setEncountersAsync() {
    try {
        const data = yield call(Api.fetchEncounters);
        yield put(setEncounters(data));
    } catch (err){
        if (err === 500){
            yield put(setEncounterErrors(constants.STATUS_500))
        } else if (err === 503){
            yield put(setEncounterErrors(constants.STATUS_503))
        } else if (err === 409){
            yield put(setEncounterErrors(constants.STATUS_409))
        } else if (err === 404){
            yield put(setEncounterErrors(constants.STATUS_404))
        } else if (err === 403){
            yield put(setEncounterErrors(constants.STATUS_403))
        } else if (err === 401){
            yield put(setEncounterErrors(constants.STATUS_401))
        } else if (err === 400){
            yield put(setEncounterErrors(constants.STATUS_400))
        } else {
            yield put(setEncounterErrors(constants.UNEXPECTED_ERROR))
        }
    }
}

/**
 * Adds a new encounter to the database
 * @param {Redux action holding the new encounter data} action 
 */
export function* addNewEncounterAsync(action) {
    try {
        let encounter = action.payload;
        yield call(Api.addNewEncounter, encounter)
        yield put(handleAddOpen(false))
        yield put(setEncounterSuccess(constants.ENC_SUCCESSFUL_ADD))
        const data = yield call(Api.fetchEncounters);
        yield put(setEncounters(data))
    } catch(err){
        if (err === 500){
            yield put(setEncounterErrors(constants.STATUS_500))
        } else if (err === 503){
            yield put(setEncounterErrors(constants.STATUS_503))
        } else if (err === 409){
            yield put(setEncounterErrors(constants.STATUS_409))
        } else if (err === 404){
            yield put(setEncounterErrors(constants.STATUS_404))
        } else if (err === 403){
            yield put(setEncounterErrors(constants.STATUS_403))
        } else if (err === 401){
            yield put(setEncounterErrors(constants.STATUS_401))
        } else if (err === 400){
            yield put(setEncounterErrors(constants.STATUS_400))
        } else {
            yield put(setEncounterErrors(constants.UNEXPECTED_ERROR))
        }
    }
}

/**
 * Updates an existing encounter in the database
 * @param {Redux action holding the updated encounter data} action 
 */
export function* updateEncounterAsync(action) {
    try {
        let encounter = action.payload;

        yield call(Api.updateEncounter, encounter)
        yield put(setEncounterSuccess(constants.ENC_SUCCESSFUL_UPDATE))
        let data = yield call(Api.fetchEncounters)
        yield put(setEncounters(data))
        yield put(setEditOpen(false))
    } catch(err){
        if (err === 500){
            yield put(setEncounterErrors(constants.STATUS_500))
        } else if (err === 503){
            yield put(setEncounterErrors(constants.STATUS_503))
        } else if (err === 409){
            yield put(setEncounterErrors(constants.STATUS_409))
        } else if (err === 404){
            yield put(setEncounterErrors(constants.STATUS_404))
        } else if (err === 403){
            yield put(setEncounterErrors(constants.STATUS_403))
        } else if (err === 401){
            yield put(setEncounterErrors(constants.STATUS_401))
        } else if (err === 400){
            yield put(setEncounterErrors(constants.STATUS_400))
        } else {
            yield put(setEncounterErrors(constants.UNEXPECTED_ERROR))
        }
    }
}

/**
 * Deletes an encounter from the database 
 * @param {Redux action holding the ID of the encounter you would like to delete} action 
 */
export function* deleteEncounterAsync(action) {
    try {
        
        yield call(Api.deleteEncounter, action.payload)
        yield put(setEncounterSuccess('Encounter successfully deleted!'))
    } catch(err){
        if (err === 500){
            yield put(setEncounterErrors(constants.STATUS_500))
        } else if (err === 503){
            yield put(setEncounterErrors(constants.STATUS_503))
        } else if (err === 409){
            yield put(setEncounterErrors(constants.STATUS_409))
        } else if (err === 404){
            yield put(setEncounterErrors(constants.STATUS_404))
        } else if (err === 403){
            yield put(setEncounterErrors(constants.STATUS_403))
        } else if (err === 401){
            yield put(setEncounterErrors(constants.STATUS_401))
        } else if (err === 400){
            yield put(setEncounterErrors(constants.STATUS_400))
        } else {
            yield put(setEncounterErrors(constants.UNEXPECTED_ERROR))
        }
    }
}
/**
 * Watches for the saga calls 
 */
export function* watchSetEncountersAsync(){
    yield takeEvery(constants.SET_ENCOUNTERS_ASYNC, setEncountersAsync)
    yield takeEvery(constants.ADD_NEW_ENCOUNTER_ASYNC, addNewEncounterAsync)
    yield takeEvery(constants.UPDATE_ENCOUNTER_ASYNC, updateEncounterAsync)
    yield takeEvery(constants.DELETE_ENCOUNTER_ASYNC, deleteEncounterAsync)
}