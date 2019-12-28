import React, { Component } from 'react'
import { Paper, Grid } from '@material-ui/core'
import Encounter from '../Encounter/Encounter'
import { connect } from 'react-redux';
import * as encounterActions from '../../Redux/Actions/encounterActions'
import * as patientActions from '../../Redux/Actions/patientActions'
import EditPatientForm from './EditPatientForm';

/**
|--------------------------------------------------
| Patient details page
|--------------------------------------------------
*/
class PatientDetails extends Component {
    /**
     * runs when the component mounts
     */
    componentDidMount = () => {
        this.fetchPatients();
        this.fetchEncounters();
        this.clearMessages();
        this.setPatientEncounters();
    }
    /**
     * Fetches all patients
     */
    fetchPatients = () => {
        this.props.dispatch(patientActions.setPatientsAsync());
    }
    /**
     * Fetches all encounters
     */
    fetchEncounters = () => {
        this.props.dispatch(encounterActions.setEncountersAsync());
    }
    /**
     * Sets all patient encounters
     */
    setPatientEncounters = () => {
        let encounters = this.props.encounterState.data;
        let patientEncounters = []
        
        for (let i = 0; i < encounters.length; i++) {
            if (this.props.patientState.modalInfo.patientId === this.props.encounterState.data[i].patient.patientId) {
                patientEncounters.push(this.props.encounterState.data[i])
            }
        }
        this.props.dispatch(encounterActions.setPatientEncounter(patientEncounters))
    }
    /**
     * Clears messages for patient and encounter successes
     */
    clearMessages = () => {
        this.props.dispatch(encounterActions.setEncounterSuccess(''))
        this.props.dispatch(patientActions.setPatientSuccess(''))
    }
    /**
     * Renders the patient details page
     */
    render() {
        const { patientState, encounterState } = this.props
        let details = patientState.modalInfo
        let eSuccess = encounterState.success
        let pSuccess = patientState.success

        return (
            <div className='pat-deets'>
                <div>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <div className='patient-details'>
                                <EditPatientForm
                                    data={details}
                                />
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className="patient-encounters">
                                <Paper>
                                    <Encounter
                                    />
                                </Paper>
                                {eSuccess.length > 0 ? (<h3 className='text-center success'>{eSuccess}</h3>) : (<div></div>)}
                                {pSuccess.length > 0 ? (<h3 className='text-center success'>{pSuccess}</h3>) : (<div></div>)}
                            </div>
                        </Grid>
                    </Grid>
                </div>
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
export default connect(mapStateToProps)(PatientDetails)
