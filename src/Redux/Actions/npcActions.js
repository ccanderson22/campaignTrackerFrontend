import constants from "../constants"

export const setNpcs = (data) => {
    return {
        type: constants.SET_NPCS,
        payload: data
    }
}
export const setNpcId = (id) => {
    return {
        type: constants.SET_NPC_ID,
        payload: id
    }
}
export const setNpcsAsync = ( ) => {
    return {
        type: constants.SET_NPCS_ASYNC
    }
}