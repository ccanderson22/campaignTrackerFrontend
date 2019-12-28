import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Grid, Dialog } from '@material-ui/core'
import * as actions from '../../Redux/Actions/encounterActions'

/**
|--------------------------------------------------
| Edit encounter form
|--------------------------------------------------
*/
class EditEncounterForm extends Component {
    /**
     * Runs when the component mounts
     */
    componentDidMount = () => {
        this.props.dispatch(actions.setEncounterErrors(''))
    }
    /**
     * Runs when the component will unmount
     */
    componentWillUnmount = () => {
        this.setUpdatedEncounters(this.props.patientState.modalInfo.patientId)
        this.props.dispatch(actions.setEditing(false))
    }
    /**
     * Handles the deletion of an encounter
     */
    handleDelete = (id) => {
        this.props.dispatch(actions.deleteEncounterAsync(id))
        this.props.dispatch(actions.setEditOpen(false))
        setTimeout(() => {
            this.setNewPatientEncounters(id);
        }, 50);

    }
    /**
     * Sets patient encounters for the patient details page
     */
    setNewPatientEncounters = (id) => {
        let patEnc = this.props.encounterState.patEncounters;
        let newPatEncounters = []
        for (let i = 0; i < patEnc.length; i++) {
            if (id !== patEnc[i].encounterId) {
                newPatEncounters.push(patEnc[i])
            }
        }
        this.props.dispatch(actions.setPatientEncounter(newPatEncounters))
    }
    /**
     * Sets updated encounters of the patient details page 
     */
    setUpdatedEncounters = (id) => {
        let encounters = this.props.encounterState.data;
        let patientEncounters = []

        for (let i = 0; i < encounters.length; i++) {
            if (id === encounters[i].patient.patientId) {
                patientEncounters.push(encounters[i])
            }
        }
        this.props.dispatch(actions.setPatientEncounter(patientEncounters))
    }
    /**
     * Handles submit for the edit encounter form
     */
    handleSubmit = (e) => {
        e.preventDefault();
        let encounterId = this.props.encounterState.modalInfo[0].encounterId
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

        let updatedEncounter = {
            encounterId: encounterId,
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
        this.props.dispatch(actions.updateEncounterAsync(updatedEncounter));
    }
    /**
     * Handles validation for the edit encounter form
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
        const { open, editing, encounterState } = this.props

        return (
            <div>
                <Dialog open={open}>

                    {encounterState.errors.length > 0 ? (<p className='error text-center'>{encounterState.errors}</p>) : (<h3 className='text-center modal-top'>Edit encounter</h3>)}
                    <form className='enc-add-edit' onSubmit={this.handleSubmit}>
                        <Grid container spacing={1}>
                            <Grid container spacing={1}>
                                <Grid item sm={12} md={6}>
                                    {editing ? (
                                        <div>
                                            <label className='text-left'>Provider</label>
                                            <input
                                                id='provider'
                                                name='provider'
                                                type='text'
                                                defaultValue={encounterState.modalInfo[0].provider}
                                                required
                                                maxLength={45}
                                            />
                                        </div>
                                    ) : (
                                            <div>
                                                <label>Provider: </label>
                                                <p>{encounterState.modalInfo[0].provider} </p>
                                            </div>

                                        )}

                                </Grid>
                                <Grid item sm={12} md={2}>
                                    {editing ? (
                                        <div>
                                            <label className='text-left'>Systolic</label>
                                            <input
                                                id='systolic'
                                                name='systolic'
                                                type='number'
                                                defaultValue={encounterState.modalInfo[0].systolic}
                                                onBlur={(e) => this.encounterValidator('systolic', e.target.value)}
                                            />

                                        </div>
                                    ) : (
                                            <div>
                                                <label> Systolic: </label>
                                                <p>{encounterState.modalInfo[0].systolic}</p>
                                            </div>

                                        )}
                                </Grid>
                                <Grid item sm={12} md={2}>
                                    {editing ? (
                                        <div>
                                            <label className='text-left'>Diastolic</label>
                                            <input
                                                id='diastolic'
                                                name='diastolic'
                                                type='number'
                                                defaultValue={encounterState.modalInfo[0].diastolic}
                                                onBlur={(e) => this.encounterValidator('diastolic', e.target.value)}
                                            />
                                        </div>
                                    ) : (
                                            <div>
                                                <label>Diastolic: </label>
                                                <p>{encounterState.modalInfo[0].diastolic}</p>
                                            </div>

                                        )}

                                </Grid>
                                <Grid item sm={12} md={2}>
                                    {editing ? (
                                        <div>
                                            <label className='text-left'>Pulse</label>
                                            <input
                                                id='pulse'
                                                name='pulse'
                                                type='number'
                                                defaultValue={encounterState.modalInfo[0].pulse}
                                                onBlur={(e) => this.encounterValidator('pulse', e.target.value)}
                                            />
                                        </div>
                                    ) : (
                                            <div>
                                                <label>Pulse: </label>
                                                <p>{encounterState.modalInfo[0].pulse}</p>
                                            </div>

                                        )}

                                </Grid>
                            </Grid>

                            <Grid container spacing={1}>
                                <Grid item sm={12} md={4}>
                                    {editing ? (
                                        <div>
                                            <label className='text-left'>Billing Code</label>
                                            <input
                                                id='billing'
                                                name='billingCode'
                                                type='text'
                                                defaultValue={encounterState.modalInfo[0].billingCode}
                                                required
                                                onBlur={(e) => this.encounterValidator('billing', e.target.value)}
                                                maxLength={14}
                                            />
                                        </div>
                                    ) : (
                                            <div>
                                                <label>Billing code: </label>
                                                <p>{encounterState.modalInfo[0].billingCode}</p>
                                            </div>

                                        )}

                                </Grid>
                                <Grid item sm={12} md={3}>
                                    {editing ? (
                                        <div>
                                            <label className='text-left'>Copay</label>
                                            <input
                                                id='copay'
                                                name='copay'
                                                type='number'
                                                defaultValue={encounterState.modalInfo[0].copay}
                                                required
                                                step='any'
                                            />
                                        </div>
                                    ) : (
                                            <div>
                                                <label>Copay: </label>
                                                <p>{encounterState.modalInfo[0].copay}</p>
                                            </div>
                                        )}

                                </Grid>
                                <Grid item sm={12} md={3}>
                                    {editing ? (
                                        <div>
                                            <label className='text-left'>Total</label>
                                            <input
                                                id='total'
                                                name='totalCost'
                                                type='number'
                                                defaultValue={encounterState.modalInfo[0].totalCost}
                                                required
                                                step='any'
                                            />
                                        </div>
                                    ) : (
                                            <div>
                                                <label>Total: </label>
                                                <p>{encounterState.modalInfo[0].totalCost}</p>
                                            </div>

                                        )}

                                </Grid>
                                
                                <Grid item sm={12} md={2}>
                                    {editing ? (
                                        <div>
                                            <label className='text-left'>ICD10</label>
                                            <input
                                                id='icd10'
                                                name='icd10'
                                                type='text'
                                                defaultValue={encounterState.modalInfo[0].icd10}
                                                required
                                                onBlur={(e) => this.encounterValidator('icd10', e.target.value)}
                                                maxLength={3}
                                            />
                                        </div>
                                    ) : (
                                            <div>
                                                <label>ICD10: </label>
                                                <p>{encounterState.modalInfo[0].icd10}</p>
                                            </div>
                                        )}

                                </Grid>
                            </Grid>

                            <Grid container spacing={1}>
                                <Grid item sm={12} md={4}>
                                    {editing ? (
                                        <div>
                                            <label className='text-left'>Chief Complaint</label>
                                            <input
                                                id='chiefComplaint'
                                                name='complaint'
                                                type='text'
                                                defaultValue={encounterState.modalInfo[0].chiefComplaint}
                                                maxLength={45}
                                            />
                                        </div>
                                    ) : (
                                            <div>
                                                <label>Chief Complaint: </label>
                                                <p>{encounterState.modalInfo[0].chiefComplaint}</p>
                                            </div>
                                        )}

                                </Grid>
                                <Grid item sm={12} md={4}>
                                    {editing ? (
                                        <div>
                                            <label className='text-left'>Date</label>
                                            <input
                                                id='date'
                                                name='date'
                                                type='text'
                                                defaultValue={new Date(encounterState.modalInfo[0].date).toString().slice(3, 15)}
                                                required
                                            />
                                        </div>
                                    ) : (
                                            <div>
                                                <label>Date: </label>
                                                <p>{new Date(encounterState.modalInfo[0].date).toString().slice(3, 15)}</p>
                                            </div>
                                        )}

                                </Grid>
                                <Grid item xs={12} md={4}>
                                    {editing ? (
                                        <div>
                                            <label className='text-left'>Visit Code</label>
                                            <input
                                                id='visit-code'
                                                name='visitCode'
                                                type='text'
                                                defaultValue={encounterState.modalInfo[0].visitCode}
                                                required
                                                onBlur={(e) => this.encounterValidator('visit', e.target.value)}
                                                maxLength={7}
                                            />
                                        </div>
                                    ) : (
                                            <div>
                                                <label>Visit Code: </label>
                                                <p>{encounterState.modalInfo[0].visitCode}</p>
                                            </div>
                                        )}

                                </Grid>
                            </Grid>


                            <Grid item xs={12}>
                                {editing ? (
                                    <div>
                                        <label className='text-left'>Notes</label>
                                        <input
                                            id='notes'
                                            name='notes'
                                            type='text'
                                            defaultValue={encounterState.modalInfo[0].notes}
                                            required
                                            maxLength={45}
                                        />
                                    </div>
                                ) : (
                                        <div>
                                            <label>Notes: </label>
                                            <p>{encounterState.modalInfo[0].notes}</p>
                                        </div>
                                    )}
                            </Grid>
                            <Grid container direction='row-reverse'>
                                    <Grid item >
                                    {editing ? (
                                        <div>
                                            <input
                                                type='submit'
                                            />
                                            <button className='muted-button' onClick={() => this.props.dispatch(actions.setEditing(false))}>Cancel Edit</button>
                                        </div>
                                    ) : (
                                            <button onClick={() => this.props.dispatch(actions.setEditing(true))}>Edit encounter</button>
                                        )}
                                    </Grid>
                            </Grid>
                        </Grid>
                    </form>
                    <Grid container>
                        <Grid item xs={3}>
                            <button className='muted-button' onClick={() => this.props.dispatch(actions.setEditOpen(false))}>Close</button>
                        </Grid>
                        <Grid item xs={9}>
                          {/* <button className='button' id='delete-btn' onClick={() => this.handleDelete(encounterState.modalInfo[0].encounterId)}>DELETE</button> */}
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


export default connect(mapStateToProps)(EditEncounterForm)