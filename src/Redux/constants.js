let BASE_URL = 'http://localhost:5000'
export default {
    //Fetch constants
    BASE_URL: 'http://localhost:5000',

    //Campaign Constants
    CAMPAIGN_URL: BASE_URL + '/campaigns',
    ADD_CAMPAIGN_URL: BASE_URL + '/campaigns/add',
    SET_CAMPAIGN_ID: 'SET_CAMPAIGN_ID',
    SET_CAMPAIGNS: 'SET_CAMPAIGNS',
    SET_CAMPAIGNS_ASYNC: 'SET_CAMPAIGNS_ASYNC',
    ADD_CAMPAIGN_ASYNC: 'ADD_CAMPAIGN_ASYNC',
    // NPC Constants 
    NPC_URL: BASE_URL + '/npcs/campaign-id/',
    SET_NPCS: 'SET_NPCS',
    SET_NPCS_ASYNC: 'SET_NPCS_ASYNC',
    SET_NPC_ID: 'SET_NPC_ID',
}