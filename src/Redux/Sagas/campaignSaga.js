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
export function* addCampaignAsync(campaign) {
    try {
        yield call(Api.addCampaign, campaign);
        const data = yield call(Api.fetchCampaigns);
        yield put(setCampaigns(data))
        // yield put(setCampaigns(data))const data = 
    } catch (err) {

    }
}


export function* watchCampaignsAsync() {
    yield takeEvery(constants.SET_CAMPAIGNS_ASYNC, setCampaignsAsync)
    yield takeEvery(constants.ADD_CAMPAIGN_ASYNC, addCampaignAsync)
}