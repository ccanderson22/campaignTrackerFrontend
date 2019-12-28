import constants from '../constants'

const initialState = {
    campaigns: [],
    campaignId: '',
}

function campaignReducer(state = initialState, action) {
    switch (action.type) {
        case constants.SET_CAMPAIGN_ID:
            return Object.assign({}, state, {
                campaignId: action.payload
            })
        case constants.SET_CAMPAIGNS:
            return Object.assign({}, state, {
                campaigns: [...action.payload]
            })
        default:
            return state
        }
}

export default campaignReducer;