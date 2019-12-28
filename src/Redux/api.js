import constants from './constants'

export const fetchCampaigns = () => {
    let url = constants.CAMPAIGN_URL
    let init = {
        method: 'GET',
        headers: new Headers({
            "Access-Control-Allow-Origin": '*',
            'Content-Type': 'application/json',
        }),
    }
    return new Promise((resolve, reject) => {
        return fetch(url, init)
            .then(res => {
                let jsonResp = res.json();
                if (res.status <= 204) {
                    return jsonResp;
                }
                throw res.status
            })
            .then(jsonResp => {
                resolve(jsonResp)
            })
            .catch((err) => {
                reject(err)
            })
    })
}


export const fetchNpcs = () => {
    let url = constants.NPC_URL
    let init = {
        method: 'GET',
        headers: new Headers({
            "Access-Control-Allow-Origin": '*',
            'Content-Type': 'application/json',
        }),
    }
    return new Promise((resolve, reject) => {
        return fetch(url, init)
            .then(res => {
                let jsonResp = res.json();
                if (res.status <= 204) {
                    return jsonResp;
                }
                throw res.status
            })
            .then(jsonResp => {
                resolve(jsonResp)
            })
            .catch((err) => {
                reject(err)
            })
    })
}


export const fetchNpcsByCampaign = (cId) => {
    let url = "http://localhost:5000/npcs/campaign-id/" + cId //constants.NPC_URL + cId
    let init = {
        method: 'GET',
        headers: new Headers({
            "Access-Control-Allow-Origin": '*',
            'Content-Type': 'application/json',
        }),
    }
    return new Promise((resolve, reject) => {
        return fetch(url, init)
            .then(res => {
                let jsonResp = res.json();
                if (res.status <= 204) {
                    return jsonResp;
                }
                throw res.status
            })
            .then(jsonResp => {
                resolve(jsonResp)
            })
            .catch((err) => {
                reject(err)
            })
    })
}