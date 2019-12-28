import constants from '../constants'

const initialState = {
    npcs: [],
    npcId: '',
}

function npcReducer(state = initialState, action) {
    switch (action.type) {
        case constants.SET_NPC_ID:
            return Object.assign({}, state, {
                npcId: action.payload
            })
        case constants.SET_NPCS:
            return Object.assign({}, state, {
                npcs: [...action.payload]
            })
        default:
            return state
        }
}

export default npcReducer;