let BASE_URL = 'http://localhost:5000'
export default {
    //Select Options
    skills: ['Acrobatics', 'Animal Handling', 'Arcana', 'Athletics', 'Deception', 'History', 'Insight', 'Intimidation', 'Investigation', 'Investigation', 'Medicine', 'Nature', 'Perception', 'Performance', 'Persuasion', 'Religion', 'Sleight of Hand', 'Stealth', 'Survival'],
    alignmentMoral: ['Good', 'Neutral', 'Evil'],
    alignmentBelief: ['Lawful', 'Neutral', 'Chaotic'],

    //Fetch constants
    BASE_URL: 'http://localhost:5000',

    //Campaign URL Constants
    CAMPAIGN_URL: BASE_URL + '/campaigns',
    ADD_CAMPAIGN_URL: BASE_URL + '/campaigns/add',
    //Campaign URL Constants
    SET_CAMPAIGN_ID: 'SET_CAMPAIGN_ID',
    SET_CAMPAIGNS: 'SET_CAMPAIGNS',
    SET_CAMPAIGNS_ASYNC: 'SET_CAMPAIGNS_ASYNC',
    ADD_CAMPAIGN_ASYNC: 'ADD_CAMPAIGN_ASYNC',
    // NPC URL Constants 
    NPC_URL: BASE_URL + '/npcs/campaign-id/',
    ADD_NPC_URL: BASE_URL + '/npcs/add/',
    EDIT_NPC_URL: BASE_URL + '/npcs/update/',
    // NPC Action Constants
    SET_NPCS: 'SET_NPCS',
    SET_NPCS_ASYNC: 'SET_NPCS_ASYNC',
    SET_NPC_ID: 'SET_NPC_ID',
    ADD_NPC_ASYNC: 'ADD_NPC_ASYNC',
    UPDATE_NPC_ASYNC: 'UPDATE_NPC_ASYNC',
}