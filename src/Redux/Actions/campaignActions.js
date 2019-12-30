import constants from "../constants"

export const setCampaigns = (data) => {
    return {
        type: constants.SET_CAMPAIGNS,
        payload: data
    }
}
export const setCampaignId = (id) => {
    return {
        type: constants.SET_CAMPAIGN_ID,
        payload: id
    }
}
export const setCampaignsAsync = ( ) => {
    return {
        type: constants.SET_CAMPAIGNS_ASYNC
    }
}
export const addCampaignAsync = (campaign) => {
    return {
        type: constants.ADD_CAMPAIGN_ASYNC,
        payload: campaign
    }
}