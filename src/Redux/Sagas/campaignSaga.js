import {
    put,
    takeEvery,
    call
} from 'redux-saga/effects';
import * as Api from '../api';
import { setCampaigns } from '../Actions/campaignActions'
import constants from '../constants';

export function* setCampaignsAsync() {
    try {
        const data = yield call(Api.fetchCampaigns);
        yield put(setCampaigns(data))
    } catch (err) {

    }
}

export function* watchCampaignsAsync() {
    yield takeEvery(constants.SET_CAMPAIGNS_ASYNC, setCampaignsAsync)
}