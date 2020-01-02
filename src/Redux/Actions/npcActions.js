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
export const setNpcsAsync = (id) => {
    return {
        type: constants.SET_NPCS_ASYNC,
        payload: id
    }
}
export const addNpcAsync = (npc) => {
    return {
        type: constants.ADD_NPC_ASYNC,
        payload: npc
    }
}
export const editNpcAsync = (npc) => {
    return {
        type: constants.UPDATE_NPC_ASYNC,
        payload: npc
    }
}