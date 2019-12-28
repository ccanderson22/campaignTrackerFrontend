import {
    put,
    takeEvery,
    call
} from 'redux-saga/effects';
import * as Api from '../api';
import { setNpcs } from '../Actions/npcActions'
import { setCampaigns } from '../Actions/campaignActions'
import constants from '../constants';


export function* setNpcsAsync(action) {
    try {
        console.log('saga: ', action)
        let id = action.payload
        const data = yield call(Api.fetchNpcsByCampaign, id);
        console.log('data', data)
        yield put(setNpcs(data))
    } catch (err) {

    }
}

export function* watchNpcsAsync() {
    yield takeEvery(constants.SET_NPCS_ASYNC, setNpcsAsync)
}