import {
    put,
    takeEvery,
    call
} from 'redux-saga/effects';
import * as Api from '../api';
import { setNpcs } from '../Actions/npcActions'
import constants from '../constants';


export function* setNpcsAsync(action) {
    try {
        let id = action.payload
        const data = yield call(Api.fetchNpcsByCampaign, id);
        yield put(setNpcs(data))
    } catch (err) {

    }
}
export function* addNpcAsync(npc) {
    try {
        yield call(Api.addNpc, npc);
        const data = yield call(Api.fetchNpcsByCampaign, sessionStorage.getItem('campaignId'));
        yield put(setNpcs(data))
    } catch (err) {

    }
}

export function* editNpcAsync(npc) {
    try {
        yield call(Api.editNpc, npc);
        const data = yield call(Api.fetchNpcsByCampaign, sessionStorage.getItem('campaignId'));
        yield put(setNpcs(data))
    } catch (err) {

    }
}

export function* watchNpcsAsync() {
    yield takeEvery(constants.SET_NPCS_ASYNC, setNpcsAsync)
    yield takeEvery(constants.ADD_NPC_ASYNC, addNpcAsync)
    yield takeEvery(constants.UPDATE_NPC_ASYNC, editNpcAsync)
}