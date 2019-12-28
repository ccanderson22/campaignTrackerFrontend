import {
    put,
    takeEvery,
    call
} from 'redux-saga/effects';
import * as Api from '../api';
import { setNpcs } from '../Actions/npcActions'
import constants from '../constants';


export function* setNpcsAsync(id) {
    try {
        const data = yield call(Api.fetchNpcsByCampaign(id));
        console.log(data)
        yield put(setNpcs(data))
    } catch (err) {

    }
}

export function* watchNpcsAsync() {
    yield takeEvery(constants.SET_NPCS_ASYNC, setNpcsAsync)
}