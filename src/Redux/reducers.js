import {
    combineReducers
} from 'redux';
import campaignReducer from '../Redux/Reducers/campaignReducer'
import npcReducer from '../Redux/Reducers/npcReducer'


//reducers being combined
const defaultReducer = combineReducers({
    campaign: campaignReducer,
    npc: npcReducer
})

export default defaultReducer;