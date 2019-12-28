import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Grid, Dialog, } from '@material-ui/core'
import * as actions from '../../Redux/Actions/encounterActions'

/**
|--------------------------------------------------
| Add encounter form
|--------------------------------------------------
*/
class AddEncounterForm extends Component {
    /**
     * handles the submit of the add encounter form
     */
    handleSubmit = (e) => {
        e.preventDefault();
        let patient = this.props.patientState.modalInfo
        let notes = e.target.notes.value;
        let visitCode = e.target.visitCode.value;
        let provider = e.target.provider.value;
        let billingCode = e.target.billingCode.value;
        let icd10 = e.target.icd10.value;
        let totalCost = e.target.totalCost.value;
        let copay = e.target.copay.value;
        let complaint = e.target.complaint.value
        let pulse = e.target.pulse.value
        let systolic = e.target.systolic.value
        let diastolic = e.target.diastolic.value
        let date = new Date(e.target.date.value)

        let newEncounter = {
            patient: patient,
            notes: notes,
            visitCode: visitCode,
            provider: provider,
            billingCode: billingCode,
            icd10: icd10,
            totalCost: totalCost,
            copay: copay,
            chiefComplaint: complaint,
            pulse: pulse,
            systolic: systolic,
            diastolic: diastolic,
            date: date
        }
        this.props.dispatch(actions.addNewEncounterAsync(newEncounter));


        setTimeout(() => {
            this.setNewPatientEncounters(patient.patientId);
        }, 100);
    }
    /**
     * Sets patient encounters
     */
    setNewPatientEncounters = (id) => {
        let patEnc = this.props.encounterState.data;
        let newPatEncounters = []
        for (let i = 0; i < patEnc.length; i++) {
            if (id === patEnc[i].patient.patientId) {
                newPatEncounters.push(patEnc[i])
            }
        }
        this.props.dispatch(actions.setPatientEncounter(newPatEncounters))
    }
    /**
     * Handles validation for the add encounter form
     */
    encounterValidator = (type, value) => {
        let error = []
        if (type === 'visit') {
            if (!value.match(/[A-Z]{1}[0-9]{1}[A-Z]{1} [0-9]{1}[A-Z]{1}[0-9]{1}/)) {
                error.push('Visit Code in wrong format, Ex. H6F 5E3')
            }
        }
        if (type === 'billing') {
            if (!value.match(/([0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2})/)) {
                error.push('Billing Code must be in a 123.456.789-12 format')
            }
        }
        if (type === 'icd10') {
            if (!value.match(/[A-Z]{1}[0-9]{2}/)) {
                error.push('ICD10 in wrong format, Ex. A22')
            }
        }
        if (type === 'pulse') {
            if (value > 200 || value <= 0) {
                error.push('Patient heart rate cannot exceed 200 bpm or less than 1')
            }
        }
        if (type === 'diastolic') {
            if (value > 250 || value <= 0) {
                error.push('Patient diastolic pressure cannot exceed 250 or less than 1')
            }
        }
        if (type === 'systolic') {
            if (value > 370 || value <= 0) {
                error.push('Patient systolic pressure cannot exceed 370 or less than 1')
            }
        }
        this.props.dispatch(actions.setEncounterErrors(error))

    }
    render() {
        const { open, encounterState } = this.props
        return (
            <div>
                <Dialog open={open}>
                    {encounterState.errors.length > 0 ? (<h3 className='error text-center'>{encounterState.errors}</h3>) : (<h3 className='text-center modal-top'>Add new encounter</h3>)}

                    <form className='enc-add-edit' onSubmit={this.handleSubmit}>
                        <Grid container spacing={1}>
                            <Grid container spacing={1}>
                                <Grid item sm={12} md={6}>
                                    <label className='text-left'>Provider</label>
                                    <input
                                        id='provider'
                                        name='provider'
                                        type='text'
                                        placeholder='Ex. Dr.Seuss'
                                        required
                                        maxLength={45}
                                    />
                                </Grid>
                                <Grid item sm={12} md={2}>
                                    <label className='text-left'>Systolic</label>
                                    <input
                                        id='systolic'
                                        name='systolic'
                                        type='number'
                                        placeholder='Ex. 118'
                                        onBlur={(e) => this.encounterValidator('systolic', e.target.value)}
                                        maxLength={3}
                                    />
                                </Grid>
                                <Grid item sm={12} md={2}>
                                    <label className='text-left'>Diastolic</label>
                                    <input
                                        id='diastolic'
                                        name='diastolic'
                                        type='number'
                                        placeholder='Ex. 80'
                                        onBlur={(e) => this.encounterValidator('diastolic', e.target.value)}
                                        maxLength={3}
                                    />
                                </Grid>
                                <Grid item sm={12} md={2}>
                                    <label className='text-left'>Pulse</label>
                                    <input
                                        id='pulse'
                                        name='pulse'
                                        type='number'
                                        placeholder='Ex. 80'
                                        onBlur={(e) => this.encounterValidator('pulse', e.target.value)}
                                        maxLength={3}
                                    />
                                </Grid>
                            </Grid>

                            <Grid container spacing={1}>
                                <Grid item sm={12} md={4}>
                                    <label className='text-left'>Billing Code</label>
                                    <input
                                        id='billing'
                                        name='billingCode'
                                        type='text'
                                        placeholder='Ex. 123.456.789-12'
                                        required
                                        onBlur={(e) => this.encounterValidator('billing', e.target.value)}
                                        maxLength={14}
                                    />
                                </Grid>
                                <Grid item sm={12} md={3}>
                                    <label className='text-left'>Copay</label>
                                    <input
                                        id='copay'
                                        name='copay'
                                        type='number'
                                        placeholder='Ex. 125.99'
                                        required
                                        step='any'
                                        maxLength={10}
                                    />
                                </Grid>
                                <Grid item sm={12} md={3}>
                                    <label className='text-left'>Total</label>
                                    <input
                                        id='total'
                                        name='totalCost'
                                        type='number'
                                        placeholder='Ex. 14005.86'
                                        required
                                        step='any'
                                        maxLength={10}
                                    />
                                </Grid>
                                <Grid item sm={12} md={2}>
                                    <label className='text-left'>ICD10</label>
                                    <input
                                        id='icd10'
                                        name='icd10'
                                        type='text'
                                        placeholder='Ex. A22'
                                        required
                                        onBlur={(e) => this.encounterValidator('icd10', e.target.value)}
                                        maxLength={3}
                                    />
                                </Grid>
                            </Grid>

                            <Grid container spacing={1}>

                                <Grid item sm={12} md={4}>
                                    <label className='text-left'>Chief Complaint</label>
                                    <input
                                        id='chiefComplaint'
                                        name='complaint'
                                        type='text'
                                        placeholder='Ex. Back hurting'
                                        maxLength={45}

                                    />
                                </Grid>
                                <Grid item sm={12} md={4}>
                                    <label className='text-left'>Date</label>
                                    <input
                                        id='date'
                                        name='date'
                                        type='date'
                                        placeholder='Ex. 2019-02-22'
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <label className='text-left'>Visit Code</label>
                                    <input
                                        id='visit-code'
                                        name='visitCode'
                                        type='text'
                                        placeholder='H7J 8W2'
                                        required
                                        onBlur={(e) => this.encounterValidator('visit', e.target.value)}
                                        maxLength={7}
                                    />
                                </Grid>
                            </Grid>


                            <Grid item xs={12}>
                                <label className='text-left'>Notes</label>
                                <input
                                    id='notes'
                                    name='notes'
                                    type='text'
                                    placeholder='Ex. Patient has benign lump on left side of head'
                                    required
                                />
                            </Grid>
                            <input
                                type='submit'
                            />

                        </Grid>
                    </form>
                    <Grid container direction='row-reverse'>
                        <Grid item sx={2}>
                            <button className='button muted-button' onClick={() => this.props.dispatch(actions.handleAddOpen(false))}>Close</button>
                        </Grid>
                    </Grid>
                    
                </Dialog>
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


export default connect(mapStateToProps)(AddEncounterForm)