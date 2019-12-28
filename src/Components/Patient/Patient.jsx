import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as patientActions from '../../Redux/Actions/patientActions'
import * as encounterActions from '../../Redux/Actions/encounterActions'
import PatientTable from './PatientTable';
import AddPatientForm from './AddPatientForm';
/**
|--------------------------------------------------
| Patient Table
|--------------------------------------------------
*/
class Patient extends Component {
    /**
     * Runs when the component mounts
     */
    componentDidMount = () => {
        this.fetchPatients();
        this.fetchEncounters();
        this.clearMessages();
        this.props.dispatch(patientActions.handleEditing(false));
        this.props.dispatch(encounterActions.setEditing(false))
    }
    /**
     * Fetches all patients
     */
    fetchPatients = () => {
        this.props.dispatch(patientActions.setPatientsAsync());
    }
    /**
     * fetches all encoutners
     */
    fetchEncounters = () => {
        this.props.dispatch(encounterActions.setEncountersAsync());
    }
    /**
     * handles opening and closing of add patient modal
     */
    handleModal = (flag) => {
        this.props.dispatch(patientActions.handleModal(flag));
        this.props.dispatch(patientActions.setError(''))
        this.props.dispatch(encounterActions.setEncounterErrors(''))
    }
    /**
     * Handles if editing or not
     */
    handleEditing = (flag) => {
        this.props.dispatch(patientActions.handleEditing(flag));
    }
    /**
     * Sets the modal info
     */
    setModalInfo = (id) => {
        this.props.dispatch(patientActions.handleDetailsModal(true))
        this.props.dispatch(patientActions.setError(''))
        let pList = this.props.patientState.data;
        for (let i = 0; i < pList.length; i++) {
            if (id === pList[i].patientId) {
                this.props.dispatch(patientActions.setModalInfo(pList[i]))
            }
        }
    }
    /**
     * clears all success messages
     */
    clearMessages = () => {
        this.props.dispatch(encounterActions.setEncounterSuccess(''))
        this.props.dispatch(patientActions.setPatientSuccess(''))
    }


    /**
     * Renders the patient page
     */
    render() {
        const { patientState } = this.props
        return (
            <div>
               
                <PatientTable
                    data={patientState.data}
                    handleModal={this.handleModal}
                    setModalInfo={this.setModalInfo}
                    success={patientState.success}

                />
                <AddPatientForm
                    open={patientState.open}
                />

            </div>


        )
    }
}
const mapStateToProps = (state) => {
    return {
        patientState: state.patient,
        encounterState: state.encounter
    }
}


export default connect(mapStateToProps)(Patient)