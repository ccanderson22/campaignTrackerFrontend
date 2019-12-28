    import {
        setPatientsAsync,
        addNewPatientAsync,
        updatePatientAsync,
        deletePatientAsync
    } from '../Redux/Sagas/patientSagas'
    import * as actions from '../Redux/Actions/patientActions'
    import * as api from '../Redux/api'
    import sinon from 'sinon'
    import {
        runSaga
    } from 'redux-saga'
    /**
     * Test for patient Sagas
     */
    describe('patient saga test', () => {
        let patients = [{
            name: 'bill',
            ssn: '123-23-1234'
        }, {
            name: 'bob',
            ssn: '123-32-1234'
        }];
        let newPatient = {
            name: 'Jake',
            ssn: '345-54-2345'
        }
        let error = 'bad touch'
        let dispatched = [];
        let stub;
        afterEach(() => {
            stub.restore();
            dispatched = [];
        })
        /**
         * Patient add test
         */
        it('should give a database on add patient', async () => {
            stub = sinon.stub(api, 'addNewPatient').throws(500);
            await runSaga({
                dispatch: (action) => dispatched.push(action)
            }, addNewPatientAsync, actions.addNewPatientAsync(newPatient)).done;
            expect(dispatched[0]).toEqual(actions.setError(['Internal Server error, please try again later.']))
        })
        it('should give a database not connected error', async () => {
            stub = sinon.stub(api, 'addNewPatient').throws(503);
            await runSaga({
                dispatch: (action) => dispatched.push(action)
            }, addNewPatientAsync, actions.addNewPatientAsync(newPatient)).done;
            expect(dispatched[0]).toEqual(actions.setError(['Database not connected.']))
        })
        it('should throw a conflict error', async () => {
            stub = sinon.stub(api, 'addNewPatient').throws(409);
            await runSaga({
                dispatch: (action) => dispatched.push(action)
            }, addNewPatientAsync, actions.addNewPatientAsync(newPatient)).done;
            expect(dispatched[0]).toEqual(actions.setError(['Conflict, it seems a patient with that SSN already exists.']))
        })
        it('should throw a not found error', async () => {
            stub = sinon.stub(api, 'addNewPatient').throws(404);
            await runSaga({
                dispatch: (action) => dispatched.push(action)
            }, addNewPatientAsync, actions.addNewPatientAsync(newPatient)).done;
            expect(dispatched[0]).toEqual(actions.setError(['No patients found, please try again later']))
        })
        it('should throw a forbidden error', async () => {
            stub = sinon.stub(api, 'addNewPatient').throws(403);
            await runSaga({
                dispatch: (action) => dispatched.push(action)
            }, addNewPatientAsync, actions.addNewPatientAsync(newPatient)).done;
            expect(dispatched[0]).toEqual(actions.setError(['Forbidden, you shall not pass']))
        })
        it('should throw a 401 on patient add', async () => {
            stub = sinon.stub(api, 'addNewPatient').throws(401);
            await runSaga({
                dispatch: (action) => dispatched.push(action)
            }, addNewPatientAsync, actions.addNewPatientAsync(newPatient)).done;
            expect(dispatched[0]).toEqual(actions.setError(['You are not authorized to perform this action']))
        })
        it('should throw 400 error on add patient', async () => {
            stub = sinon.stub(api, 'addNewPatient').throws(400);
            await runSaga({
                dispatch: (action) => dispatched.push(action)
            }, addNewPatientAsync, actions.addNewPatientAsync(newPatient)).done;
            expect(dispatched[0]).toEqual(actions.setError(['Oops, something went wrong please try again']))
        })
        it('should have an unexpected error on patient creation', async () => {
            stub = sinon.stub(api, 'addNewPatient').throws(error);
            await runSaga({
                dispatch: (action) => dispatched.push(action)
            }, addNewPatientAsync, actions.addNewPatientAsync(newPatient)).done;
            expect(dispatched[0]).toEqual(actions.setError(['An unexpected error has occurred, please try again later.']))
        })
        /**
         * Set patient tests
         */
        it('should set all patients', async () => {
            stub = sinon.stub(api, 'fetchPatients').callsFake(() => Promise.resolve(patients));
            await runSaga({
                dispatch: (action) => dispatched.push(action)
            }, setPatientsAsync, actions.setPatientsAsync()).done;
            expect(dispatched[0]).toEqual(actions.setPatients(patients))
        })
        it('should give a database on setting patients', async () => {
            stub = sinon.stub(api, 'fetchPatients').callsFake(() => Promise.reject(500));
            await runSaga({
                dispatch: (action) => dispatched.push(action)
            }, setPatientsAsync, actions.setPatientsAsync()).done;
            expect(dispatched[0]).toEqual(actions.setError(['Internal Server error, please try again later.']))
        })
        it('should give a database not connected error', async () => {
            stub = sinon.stub(api, 'fetchPatients').callsFake(() => Promise.reject(503));
            await runSaga({
                dispatch: (action) => dispatched.push(action)
            }, setPatientsAsync, actions.setPatientsAsync()).done;
            expect(dispatched[0]).toEqual(actions.setError(['Database not connected.']))
        })
        it('should throw a conflict error', async () => {
            stub = sinon.stub(api, 'fetchPatients').callsFake(() => Promise.reject(409));
            await runSaga({
                dispatch: (action) => dispatched.push(action)
            }, setPatientsAsync, actions.setPatientsAsync()).done;
            expect(dispatched[0]).toEqual(actions.setError(['Conflict, try refreshing page.']))
        })
        it('should throw a not found error', async () => {
            stub = sinon.stub(api, 'fetchPatients').callsFake(() => Promise.reject(404));
            await runSaga({
                dispatch: (action) => dispatched.push(action)
            }, setPatientsAsync, actions.setPatientsAsync()).done;
            expect(dispatched[0]).toEqual(actions.setError(['No patients found, please try again later']))
        })
        it('should throw a forbidden error', async () => {
            stub = sinon.stub(api, 'fetchPatients').callsFake(() => Promise.reject(403));
            await runSaga({
                dispatch: (action) => dispatched.push(action)
            }, setPatientsAsync, actions.setPatientsAsync()).done;
            expect(dispatched[0]).toEqual(actions.setError(['Forbidden, you shall not pass']))
        })
        it('should throw a 401 on patient add', async () => {
            stub = sinon.stub(api, 'fetchPatients').callsFake(() => Promise.reject(401));
            await runSaga({
                dispatch: (action) => dispatched.push(action)
            }, setPatientsAsync, actions.setPatientsAsync()).done;
            expect(dispatched[0]).toEqual(actions.setError(['You are not authorized to perform this action']))
        })
        it('should throw 400 error on setting patients', async () => {
            stub = sinon.stub(api, 'fetchPatients').callsFake(() => Promise.reject(400));
            await runSaga({
                dispatch: (action) => dispatched.push(action)
            }, setPatientsAsync, actions.setPatientsAsync()).done;
            expect(dispatched[0]).toEqual(actions.setError(['Oops, something went wrong please try again']))
        })
        it('should have an unexpected error on patient creation', async () => {
            stub = sinon.stub(api, 'fetchPatients').callsFake(() => Promise.reject(error));
            await runSaga({
                dispatch: (action) => dispatched.push(action)
            }, setPatientsAsync, actions.setPatientsAsync()).done;
            expect(dispatched[0]).toEqual(actions.setError(['An unexpected error has occurred, please try again later.']))
        })

        /**
         * update patient tests
         */
        it('should give a database on add patient', async () => {
            stub = sinon.stub(api, 'updatePatient').throws(500);
            await runSaga({
                dispatch: (action) => dispatched.push(action)
            }, updatePatientAsync, actions.updatePatientAsync(newPatient)).done;
            expect(dispatched[0]).toEqual(actions.setError(['Internal Server error, please try again later.']))
        })
        it('should give a database not connected error', async () => {
            stub = sinon.stub(api, 'updatePatient').throws(503);
            await runSaga({
                dispatch: (action) => dispatched.push(action)
            }, updatePatientAsync, actions.updatePatientAsync(newPatient)).done;
            expect(dispatched[0]).toEqual(actions.setError(['Database not connected.']))
        })
        it('should throw a conflict error', async () => {
            stub = sinon.stub(api, 'updatePatient').throws(409);
            await runSaga({
                dispatch: (action) => dispatched.push(action)
            }, updatePatientAsync, actions.updatePatientAsync(newPatient)).done;
            expect(dispatched[0]).toEqual(actions.setError(['Conflict, it seems a patient with that SSN already exists.']))
        })
        it('should throw a not found error', async () => {
            stub = sinon.stub(api, 'updatePatient').throws(404);
            await runSaga({
                dispatch: (action) => dispatched.push(action)
            }, updatePatientAsync, actions.updatePatientAsync(newPatient)).done;
            expect(dispatched[0]).toEqual(actions.setError(['No patients found, please try again later']))
        })
        it('should throw a forbidden error', async () => {
            stub = sinon.stub(api, 'updatePatient').throws(403);
            await runSaga({
                dispatch: (action) => dispatched.push(action)
            }, updatePatientAsync, actions.updatePatientAsync(newPatient)).done;
            expect(dispatched[0]).toEqual(actions.setError(['Forbidden, you shall not pass']))
        })
        it('should throw a 401 on patient add', async () => {
            stub = sinon.stub(api, 'updatePatient').throws(401);
            await runSaga({
                dispatch: (action) => dispatched.push(action)
            }, updatePatientAsync, actions.updatePatientAsync(newPatient)).done;
            expect(dispatched[0]).toEqual(actions.setError(['You are not authorized to perform this action']))
        })
        it('should throw 400 error on add patient', async () => {
            stub = sinon.stub(api, 'updatePatient').throws(400);
            await runSaga({
                dispatch: (action) => dispatched.push(action)
            }, updatePatientAsync, actions.updatePatientAsync(newPatient)).done;
            expect(dispatched[0]).toEqual(actions.setError(['Oops, something went wrong please try again']))
        })
        it('should have an unexpected error on patient creation', async () => {
            stub = sinon.stub(api, 'updatePatient').throws(error);
            await runSaga({
                dispatch: (action) => dispatched.push(action)
            }, updatePatientAsync, actions.updatePatientAsync(newPatient)).done;
            expect(dispatched[0]).toEqual(actions.setError(['An unexpected error has occurred, please try again later.']))
        })
        /**
         * Delete patient test
         */
        it('should give a database on add patient', async () => {
            stub = sinon.stub(api, 'deletePatient').throws(500);
            await runSaga({
                dispatch: (action) => dispatched.push(action)
            }, deletePatientAsync, actions.deletePatientAsync(1)).done;
            expect(dispatched[0]).toEqual(actions.setError(['Internal Server error, please try again later.']))
        })
        it('should give a database not connected error', async () => {
            stub = sinon.stub(api, 'deletePatient').throws(503);
            await runSaga({
                dispatch: (action) => dispatched.push(action)
            }, deletePatientAsync, actions.deletePatientAsync(1)).done;
            expect(dispatched[0]).toEqual(actions.setError(['Database not connected.']))
        })
        it('should throw a conflict error', async () => {
            stub = sinon.stub(api, 'deletePatient').throws(409);
            await runSaga({
                dispatch: (action) => dispatched.push(action)
            }, deletePatientAsync, actions.deletePatientAsync(1)).done;
            expect(dispatched[0]).toEqual(actions.setError(['Conflict, it seems a patient with that SSN already exists.']))
        })
        it('should throw a not found error', async () => {
            stub = sinon.stub(api, 'deletePatient').throws(404);
            await runSaga({
                dispatch: (action) => dispatched.push(action)
            }, deletePatientAsync, actions.deletePatientAsync(1)).done;
            expect(dispatched[0]).toEqual(actions.setError(['No patients found, please try again later']))
        })
        it('should throw a forbidden error', async () => {
            stub = sinon.stub(api, 'deletePatient').throws(403);
            await runSaga({
                dispatch: (action) => dispatched.push(action)
            }, deletePatientAsync, actions.deletePatientAsync(1)).done;
            expect(dispatched[0]).toEqual(actions.setError(['Forbidden, you shall not pass']))
        })
        it('should throw a 401 on patient add', async () => {
            stub = sinon.stub(api, 'deletePatient').throws(401);
            await runSaga({
                dispatch: (action) => dispatched.push(action)
            }, deletePatientAsync, actions.deletePatientAsync(1)).done;
            expect(dispatched[0]).toEqual(actions.setError(['You are not authorized to perform this action']))
        })
        it('should throw 400 error on add patient', async () => {
            stub = sinon.stub(api, 'deletePatient').throws(400);
            await runSaga({
                dispatch: (action) => dispatched.push(action)
            }, deletePatientAsync, actions.deletePatientAsync(1)).done;
            expect(dispatched[0]).toEqual(actions.setError(['Oops, something went wrong please try again']))
        })
        it('should have an unexpected error on patient creation', async () => {
            stub = sinon.stub(api, 'deletePatient').throws(error);
            await runSaga({
                dispatch: (action) => dispatched.push(action)
            }, deletePatientAsync, actions.deletePatientAsync(1)).done;
            expect(dispatched[0]).toEqual(actions.setError(['An unexpected error has occurred, please try again later.']))
        })







    })