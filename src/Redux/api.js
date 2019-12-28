/**
|--------------------------------------------------
| File holding all fetch calls
|--------------------------------------------------
*/

// export const fetchPatientById = (id) => {
//     let url = 'http://localhost:8080/patients/' + id
//     let init = {
//         method: 'GET',
//         headers: new Headers({
//             "Access-Control-Allow-Origin": "*",
//             'Content-Type': 'application/json',
//         })
//     }
//     return new Promise((resolve, reject) => {
//         return fetch(url, init)
//             .then(res => {

//                 let jsonResp = res.json();
//                 if (res.status !== 200) {
//                     throw res.status
//                 }
//                 console.log(jsonResp);
//                 return jsonResp;
//             })
//             .then(jsonResp => {
//                 resolve(jsonResp)
//             })
//             .catch((err) => {
//                 reject(err)
//             })
//     })
// }

/**
 * Fetches all current patients
 */
export const fetchPatients = () => {
    let url = 'http://localhost:8080/patients'
    let init = {
        method: 'GET',
        headers: new Headers({
            "Access-Control-Allow-Origin": "*",
            'Content-Type': 'application/json',
        })
    }
    return new Promise((resolve, reject) => {
        return fetch(url, init)
            .then(res => {

                let jsonResp = res.json();
                if (res.status !== 200) {
                    throw res.status
                }

                return jsonResp;
            })
            .then(jsonResp => {
                resolve(jsonResp)
            })
            .catch((err) => {
                reject(err)
            })
    })
}
/**
 * Fetches patient by their id patients
 */
export const fetchPatientById = (id) => {
    let url = 'http://localhost:8080/patients/'
    let init = {
        method: 'GET',
        headers: new Headers({
            "Access-Control-Allow-Origin": "*",
            'Content-Type': 'application/json',
        })
    }
    return new Promise((resolve, reject) => {
        return fetch(url + id, init)
            .then(res => {

                let jsonResp = res.json();
                if (res.status !== 200) {
                    throw res.status
                }

                return jsonResp;
            })
            .then(jsonResp => {
                resolve(jsonResp)
            })
            .catch((err) => {
                reject(err)
            })
    })
}
/**
 * Adds a new patient to thte database
 */
export const addNewPatient = (newPatient) => {
    let url = 'http://localhost:8080/patients'
    let init = {
        method: 'POST',
        headers: new Headers({
            "Access-Control-Allow-Origin": "*",
            'Content-Type': 'application/json',
        }),
        body: JSON.stringify(newPatient)
    }
    return new Promise((resolve, reject) => {
        return fetch(url, init)
            .then(res => {
                let jsonResp = res.json();
                if (res.status >= 204) {
                    throw res.status
                }
                return jsonResp;
            })
            .then(jsonResp => {
                resolve(jsonResp)
            })
            .catch((err) => {
                reject(err)
            })
    })
}
/**
 * Updates an existing patient in the database
 */
export const updatePatient = (updatedPatient) => {
    let url = 'http://localhost:8080/patients/' + updatedPatient.patientId;
    let init = {
        method: 'PUT',
        headers: new Headers({
            "Access-Control-Allow-Origin": "*",
            'Content-Type': 'application/json',
        }),
        body: JSON.stringify(updatedPatient)
    }
    return new Promise((resolve, reject) => {
        return fetch(url, init)
            .then(res => {

                let jsonResp = res.json();
                if (res.status >= 204) {
                    throw res.status
                }
                return jsonResp;
            })
            .then(jsonResp => {
                resolve(jsonResp)
            })
            .catch((err) => {
                reject(err)
            })
    })
}
/**
 * Deletes a patient from the database
 */
export const deletePatient = (id) => {
    let url = 'http://localhost:8080/patients/' + id;
    let init = {
        method: 'DELETE',
        headers: new Headers({
            "Access-Control-Allow-Origin": "*",
            'Content-Type': 'application/json',
        }),
    }
    return new Promise((resolve, reject) => {
        return fetch(url, init)
            .then(res => {
                if (res.status !== 204) {
                    throw res.status
                }
            })
            .then(jsonResp => {
                resolve(jsonResp)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

/**
 * Fetches all current encounters
 */
export const fetchEncounters = () => {
    let url = 'http://localhost:8080/encounters'
    let init = {
        method: 'GET',
        headers: new Headers({
            "Access-Control-Allow-Origin": "*",
            'Content-Type': 'application/json',
        })
    }
    return new Promise((resolve, reject) => {
        return fetch(url, init)
            .then(res => {

                let jsonResp = res.json();
                if (res.status !== 200) {
                    throw res.status
                }

                return jsonResp;
            })
            .then(jsonResp => {
                resolve(jsonResp)
            })
            .catch((err) => {
                reject(err)
            })
    })
}
/**
 * Adds new encounter to the database
 */
export const addNewEncounter = (newEncounter) => {
    let url = 'http://localhost:8080/encounters'
    let init = {
        method: 'POST',
        headers: new Headers({
            "Access-Control-Allow-Origin": "*",
            'Content-Type': 'application/json',
        }),
        body: JSON.stringify(newEncounter)
    }
    return new Promise((resolve, reject) => {
        return fetch(url, init)
            .then(res => {

                let jsonResp = res.json();
                if (res.status !== 201) {
                    throw res.status
                }

                return jsonResp;
            })
            .then(jsonResp => {
                resolve(jsonResp)
            })
            .catch((err) => {
                reject(err)
            })
    })
}
/**
 * Updates an existing encounter in the database
 */
export const updateEncounter = (updatedEncounter) => {
    let url = 'http://localhost:8080/encounters/' + updatedEncounter.encounterId
    let init = {
        method: 'PUT',
        headers: new Headers({
            "Access-Control-Allow-Origin": "*",
            'Content-Type': 'application/json',
        }),
        body: JSON.stringify(updatedEncounter)
    }
    return new Promise((resolve, reject) => {
        return fetch(url, init)
            .then(res => {
                let jsonResp = res.json();
                if (res.status !== 200) {
                    throw res.status
                }

                return jsonResp;
            })
            .then(jsonResp => {
                resolve(jsonResp)
            })
            .catch((err) => {
                reject(err)
            })
    })
}
/**
 * Deletes an encounter from the database
 */
export const deleteEncounter = (id) => {
    let url = 'http://localhost:8080/encounters/' + id
    let init = {
        method: 'DELETE',
        headers: new Headers({
            "Access-Control-Allow-Origin": "*",
            'Content-Type': 'application/json',
        }),
    }
    return new Promise((resolve, reject) => {
        return fetch(url, init)
            .then(res => {
                if (res.status !== 204) {
                    throw res.status
                }
            })
            .then(res => {
                resolve(res)
            })
            .catch((err) => {
                reject(err)
            })
    })
}