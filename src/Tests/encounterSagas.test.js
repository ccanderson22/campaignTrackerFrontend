import {
    setEncountersAsync,
    addNewEncounterAsync,
    updateEncounterAsync,
    deleteEncounterAsync
} from '../Redux/Sagas/encounterSagas'
import * as actions from '../Redux/Actions/encounterActions'
import * as api from '../Redux/api'
import sinon from 'sinon'
import {
    runSaga
} from 'redux-saga'
/**
 * Test for the encounter sagas
 */
describe('encounter saga test', () => {

    let encounters = [{
        encounterId: 1,
        patientId: 1
    }, {
        encounterId: 2,
        patientId: 1
    }];
    let newEncounter = {
        encounterId: 'Jake',
        patientId: 1
    }
    let error = 'bad touch'
    let dispatched = [];
    let stub;
    afterEach(() => {
        stub.restore();
        dispatched = [];
    })
    /**
     * Encounter add test
     */
    it('should give a database on add encounter', async () => {
        stub = sinon.stub(api, 'addNewEncounter').throws(500);
        await runSaga({
            dispatch: (action) => dispatched.push(action)
        }, addNewEncounterAsync, actions.addNewEncounterAsync(newEncounter)).done;
        expect(dispatched[0]).toEqual(actions.setEncounterErrors(['Internal Server error, please try again later.']))
    })
    it('should give a database not connected error', async () => {
        stub = sinon.stub(api, 'addNewEncounter').throws(503);
        await runSaga({
            dispatch: (action) => dispatched.push(action)
        }, addNewEncounterAsync, actions.addNewEncounterAsync(newEncounter)).done;
        expect(dispatched[0]).toEqual(actions.setEncounterErrors(['Database not connected.']))
    })
    it('should throw a conflict error', async () => {
        stub = sinon.stub(api, 'addNewEncounter').throws(409);
        await runSaga({
            dispatch: (action) => dispatched.push(action)
        }, addNewEncounterAsync, actions.addNewEncounterAsync(newEncounter)).done;
        expect(dispatched[0]).toEqual(actions.setEncounterErrors(['Conflict, it seems an encounter with that billing code already exists, enter a new billing code and try again.']))
    })
    it('should throw a not found error', async () => {
        stub = sinon.stub(api, 'addNewEncounter').throws(404);
        await runSaga({
            dispatch: (action) => dispatched.push(action)
        }, addNewEncounterAsync, actions.addNewEncounterAsync(newEncounter)).done;
        expect(dispatched[0]).toEqual(actions.setEncounterErrors(['No encounters found, please try again later']))
    })
    it('should throw a forbidden error', async () => {
        stub = sinon.stub(api, 'addNewEncounter').throws(403);
        await runSaga({
            dispatch: (action) => dispatched.push(action)
        }, addNewEncounterAsync, actions.addNewEncounterAsync(newEncounter)).done;
        expect(dispatched[0]).toEqual(actions.setEncounterErrors(['Forbidden, you shall not pass']))
    })
    it('should throw a 401 on encounter add', async () => {
        stub = sinon.stub(api, 'addNewEncounter').throws(401);
        await runSaga({
            dispatch: (action) => dispatched.push(action)
        }, addNewEncounterAsync, actions.addNewEncounterAsync(newEncounter)).done;
        expect(dispatched[0]).toEqual(actions.setEncounterErrors(['You are not authorized to perform this action']))
    })
    it('should throw 400 error on add encounter', async () => {
        stub = sinon.stub(api, 'addNewEncounter').throws(400);
        await runSaga({
            dispatch: (action) => dispatched.push(action)
        }, addNewEncounterAsync, actions.addNewEncounterAsync(newEncounter)).done;
        expect(dispatched[0]).toEqual(actions.setEncounterErrors(['Oops, something went wrong please try again']))
    })
    it('should have an unexpected error on encounter creation', async () => {
        stub = sinon.stub(api, 'addNewEncounter').throws(error);
        await runSaga({
            dispatch: (action) => dispatched.push(action)
        }, addNewEncounterAsync, actions.addNewEncounterAsync(newEncounter)).done;
        expect(dispatched[0]).toEqual(actions.setEncounterErrors(['An unexpected error has occurred, please try again later.']))
    })
    /**
     * Set encounter tests
     */
    it('should set all encounters', async () => {
        stub = sinon.stub(api, 'fetchEncounters').callsFake(() => Promise.resolve(encounters));
        await runSaga({
            dispatch: (action) => dispatched.push(action)
        }, setEncountersAsync, actions.setEncountersAsync()).done;
        expect(dispatched[0]).toEqual(actions.setEncounters(encounters))
    })
    it('should give a database on setting encounters', async () => {
        stub = sinon.stub(api, 'fetchEncounters').callsFake(() => Promise.reject(500));
        await runSaga({
            dispatch: (action) => dispatched.push(action)
        }, setEncountersAsync, actions.setEncountersAsync()).done;
        expect(dispatched[0]).toEqual(actions.setEncounterErrors(['Internal Server error, please try again later.']))
    })
    it('should give a database not connected error', async () => {
        stub = sinon.stub(api, 'fetchEncounters').callsFake(() => Promise.reject(503));
        await runSaga({
            dispatch: (action) => dispatched.push(action)
        }, setEncountersAsync, actions.setEncountersAsync()).done;
        expect(dispatched[0]).toEqual(actions.setEncounterErrors(['Database not connected.']))
    })
    it('should throw a conflict error', async () => {
        stub = sinon.stub(api, 'fetchEncounters').callsFake(() => Promise.reject(409));
        await runSaga({
            dispatch: (action) => dispatched.push(action)
        }, setEncountersAsync, actions.setEncountersAsync()).done;
        expect(dispatched[0]).toEqual(actions.setEncounterErrors(['Conflict, it seems an encounter with that billing code already exists, enter a new billing code and try again.']))
    })
    it('should throw a not found error', async () => {
        stub = sinon.stub(api, 'fetchEncounters').callsFake(() => Promise.reject(404));
        await runSaga({
            dispatch: (action) => dispatched.push(action)
        }, setEncountersAsync, actions.setEncountersAsync()).done;
        expect(dispatched[0]).toEqual(actions.setEncounterErrors(['No encounters found, please try again later']))
    })
    it('should throw a forbidden error', async () => {
        stub = sinon.stub(api, 'fetchEncounters').callsFake(() => Promise.reject(403));
        await runSaga({
            dispatch: (action) => dispatched.push(action)
        }, setEncountersAsync, actions.setEncountersAsync()).done;
        expect(dispatched[0]).toEqual(actions.setEncounterErrors(['Forbidden, you shall not pass']))
    })
    it('should throw a 401 on encounter add', async () => {
        stub = sinon.stub(api, 'fetchEncounters').callsFake(() => Promise.reject(401));
        await runSaga({
            dispatch: (action) => dispatched.push(action)
        }, setEncountersAsync, actions.setEncountersAsync()).done;
        expect(dispatched[0]).toEqual(actions.setEncounterErrors(['You are not authorized to perform this action']))
    })
    it('should throw 400 error on setting encounters', async () => {
        stub = sinon.stub(api, 'fetchEncounters').callsFake(() => Promise.reject(400));
        await runSaga({
            dispatch: (action) => dispatched.push(action)
        }, setEncountersAsync, actions.setEncountersAsync()).done;
        expect(dispatched[0]).toEqual(actions.setEncounterErrors(['Oops, something went wrong please try again']))
    })
    it('should have an unexpected error on encounter creation', async () => {
        stub = sinon.stub(api, 'fetchEncounters').callsFake(() => Promise.reject(error));
        await runSaga({
            dispatch: (action) => dispatched.push(action)
        }, setEncountersAsync, actions.setEncountersAsync()).done;
        expect(dispatched[0]).toEqual(actions.setEncounterErrors(['An unexpected error has occurred, please try again later.']))
    })

    /**
     * update encounter tests
     */
    it('should give a database on add encounter', async () => {
        stub = sinon.stub(api, 'updateEncounter').throws(500);
        await runSaga({
            dispatch: (action) => dispatched.push(action)
        }, updateEncounterAsync, actions.updateEncounterAsync(newEncounter)).done;
        expect(dispatched[0]).toEqual(actions.setEncounterErrors(['Internal Server error, please try again later.']))
    })
    it('should give a database not connected error', async () => {
        stub = sinon.stub(api, 'updateEncounter').throws(503);
        await runSaga({
            dispatch: (action) => dispatched.push(action)
        }, updateEncounterAsync, actions.updateEncounterAsync(newEncounter)).done;
        expect(dispatched[0]).toEqual(actions.setEncounterErrors(['Database not connected.']))
    })
    it('should throw a conflict error', async () => {
        stub = sinon.stub(api, 'updateEncounter').throws(409);
        await runSaga({
            dispatch: (action) => dispatched.push(action)
        }, updateEncounterAsync, actions.updateEncounterAsync(newEncounter)).done;
        expect(dispatched[0]).toEqual(actions.setEncounterErrors(['Conflict, it seems an encounter with that billing code already exists, enter a new billing code and try again.']))
    })
    it('should throw a not found error', async () => {
        stub = sinon.stub(api, 'updateEncounter').throws(404);
        await runSaga({
            dispatch: (action) => dispatched.push(action)
        }, updateEncounterAsync, actions.updateEncounterAsync(newEncounter)).done;
        expect(dispatched[0]).toEqual(actions.setEncounterErrors(['No encounters found, please try again later']))
    })
    it('should throw a forbidden error', async () => {
        stub = sinon.stub(api, 'updateEncounter').throws(403);
        await runSaga({
            dispatch: (action) => dispatched.push(action)
        }, updateEncounterAsync, actions.updateEncounterAsync(newEncounter)).done;
        expect(dispatched[0]).toEqual(actions.setEncounterErrors(['Forbidden, you shall not pass']))
    })
    it('should throw a 401 on encounter add', async () => {
        stub = sinon.stub(api, 'updateEncounter').throws(401);
        await runSaga({
            dispatch: (action) => dispatched.push(action)
        }, updateEncounterAsync, actions.updateEncounterAsync(newEncounter)).done;
        expect(dispatched[0]).toEqual(actions.setEncounterErrors(['You are not authorized to perform this action']))
    })
    it('should throw 400 error on add encounter', async () => {
        stub = sinon.stub(api, 'updateEncounter').throws(400);
        await runSaga({
            dispatch: (action) => dispatched.push(action)
        }, updateEncounterAsync, actions.updateEncounterAsync(newEncounter)).done;
        expect(dispatched[0]).toEqual(actions.setEncounterErrors(['Oops, something went wrong please try again']))
    })
    it('should have an unexpected error on encounter creation', async () => {
        stub = sinon.stub(api, 'updateEncounter').throws(error);
        await runSaga({
            dispatch: (action) => dispatched.push(action)
        }, updateEncounterAsync, actions.updateEncounterAsync(newEncounter)).done;
        expect(dispatched[0]).toEqual(actions.setEncounterErrors(['An unexpected error has occurred, please try again later.']))
    })
    /**
     * Delete encoutner tests
     */
    it('should give a database on add encounter', async () => {
        stub = sinon.stub(api, 'deleteEncounter').throws(500);
        await runSaga({
            dispatch: (action) => dispatched.push(action)
        }, deleteEncounterAsync, actions.deleteEncounterAsync(1)).done;
        expect(dispatched[0]).toEqual(actions.setEncounterErrors(['Internal Server error, please try again later.']))
    })
    it('should give a database not connected error', async () => {
        stub = sinon.stub(api, 'deleteEncounter').throws(503);
        await runSaga({
            dispatch: (action) => dispatched.push(action)
        }, deleteEncounterAsync, actions.deleteEncounterAsync(1)).done;
        expect(dispatched[0]).toEqual(actions.setEncounterErrors(['Database not connected.']))
    })
    it('should throw a conflict error', async () => {
        stub = sinon.stub(api, 'deleteEncounter').throws(409);
        await runSaga({
            dispatch: (action) => dispatched.push(action)
        }, deleteEncounterAsync, actions.deleteEncounterAsync(1)).done;
        expect(dispatched[0]).toEqual(actions.setEncounterErrors(['Conflict, it seems an encounter with that billing code already exists, enter a new billing code and try again.']))
    })
    it('should throw a not found error', async () => {
        stub = sinon.stub(api, 'deleteEncounter').throws(404);
        await runSaga({
            dispatch: (action) => dispatched.push(action)
        }, deleteEncounterAsync, actions.deleteEncounterAsync(1)).done;
        expect(dispatched[0]).toEqual(actions.setEncounterErrors(['No encounters found, please try again later']))
    })
    it('should throw a forbidden error', async () => {
        stub = sinon.stub(api, 'deleteEncounter').throws(403);
        await runSaga({
            dispatch: (action) => dispatched.push(action)
        }, deleteEncounterAsync, actions.deleteEncounterAsync(1)).done;
        expect(dispatched[0]).toEqual(actions.setEncounterErrors(['Forbidden, you shall not pass']))
    })
    it('should throw a 401 on encounter add', async () => {
        stub = sinon.stub(api, 'deleteEncounter').throws(401);
        await runSaga({
            dispatch: (action) => dispatched.push(action)
        }, deleteEncounterAsync, actions.deleteEncounterAsync(1)).done;
        expect(dispatched[0]).toEqual(actions.setEncounterErrors(['You are not authorized to perform this action']))
    })
    it('should throw 400 error on add encounter', async () => {
        stub = sinon.stub(api, 'deleteEncounter').throws(400);
        await runSaga({
            dispatch: (action) => dispatched.push(action)
        }, deleteEncounterAsync, actions.deleteEncounterAsync(1)).done;
        expect(dispatched[0]).toEqual(actions.setEncounterErrors(['Oops, something went wrong please try again']))
    })
    it('should have an unexpected error on encounter creation', async () => {
        stub = sinon.stub(api, 'deleteEncounter').throws(error);
        await runSaga({
            dispatch: (action) => dispatched.push(action)
        }, deleteEncounterAsync, actions.deleteEncounterAsync(1)).done;
        expect(dispatched[0]).toEqual(actions.setEncounterErrors(['An unexpected error has occurred, please try again later.']))
    })







})