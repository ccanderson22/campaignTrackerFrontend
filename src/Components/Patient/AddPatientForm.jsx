import React, { Component } from 'react'
import { Grid, Dialog, } from '@material-ui/core'
import * as actions from '../../Redux/Actions/patientActions'
import { connect } from 'react-redux';

/**
|--------------------------------------------------
| Add patient form
|--------------------------------------------------
*/
class AddPatientForm extends Component {

    /**
     * Handles submit for adding a new patient
     */
    handleSubmit = (e) => {
        e.preventDefault();
        let firstName = e.target.firstName.value;
        let lastName = e.target.lastName.value;
        let ssn = e.target.ssn.value;
        let street = e.target.street.value;
        let city = e.target.city.value;
        let state = e.target.state.value;
        let zip = e.target.zip.value;
        let height = e.target.height.value
        let weight = e.target.weight.value;
        let age = e.target.age.value;
        let sex = e.target.sex.value;
        let insurance = e.target.insurance.value;

        let newPatient = {
            firstName: firstName,
            lastName: lastName,
            ssn: ssn,
            address: {
                street: street,
                city: city,
                state: state,
                zip: zip
            },
            height: height,
            weight: weight,
            age: age,
            sex: sex,
            insurance: insurance,
        }
        this.props.dispatch(actions.addNewPatientAsync(newPatient))

    }
    /**
     * Handles all validation on the patient add form
     */
    patientValidator = (type, value) => {
        let error = []


        if (type === 'ssn') {
            if (!value.match(/([0-9]{3}-[0-9]{2}-[0-9]{4})/)) {
                error.push('SSN must be in standard format, Ex. 123-23-1234')
            }
        }
        if (type === 'height') {
            if (value > 120 || value < 1) {
                error.push('Patient height cannot exceed 120 inches, or less than one')
            }
        }
        if (type === 'weight') {
            if (value > 999 || value < 1) {
                error.push('Patient weight cannot exceed 999 lbs')
            }
        }
        if (type === 'age') {
            if (value > 130 || value < 0) {
                error.push('Patient age cannot exceed 130 years')
            }
        }
        if (type === 'name') {
            if (!value.match(/^[a-zA-Z](?:[ '.\-a-zA-Z]*[a-zA-Z])?$/)) {
                error.push('Name cannot be blank, and must only include letters, hyphens or apostrophes')
            }
        }
        if (type === 'zip') {
            if (!value.match(/[0-9]{5}/)) {
                error.push('Zip code must be in the 12345 format')
            }
        }
        this.props.dispatch(actions.setError(error))
    }

    render() {
        let states = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY']
        const { open, patientState } = this.props
        return (
            <div >
                <Dialog open={open} transitionDuration={300}>

                    {patientState.errors.length > 0 ? (<h3 className='error text-center'>{patientState.errors}</h3>) : (<h3 className='text-center modal-top'>Add new patient</h3>)}

                    <form className='add-edit' onSubmit={this.handleSubmit}>

                        <Grid container spacing={1}>
                            <Grid container spacing={1}>
                                <Grid item xs={12} sm={6}>
                                    <label className='text-left'>First Name</label>
                                    <input
                                        id='firstName'
                                        name='firstName'
                                        type='text'
                                        required
                                        placeholder='First Name'
                                        margin='normal'
                                        onBlur={(e) => this.patientValidator('name', e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <label className='text-left'>Last Name</label>
                                    <input
                                        id='lastName'
                                        name='lastName'
                                        type='text'
                                        required
                                        placeholder='Last Name'
                                        margin='normal'
                                        onBlur={(e) => this.patientValidator('name', e.target.value)}
                                    />
                                </Grid>
                            </Grid>

                            <Grid item xs={12}>
                                <label className='text-left'>Street</label>
                                <input
                                    id='street'
                                    name='street'
                                    type='text'
                                    required
                                    placeholder='Street'
                                    margin='normal'
                                />
                            </Grid>

                            <Grid container spacing={1}>
                                <Grid item xs={7}>
                                    <label className='text-left'>City</label>
                                    <input
                                        id='city'
                                        name='city'
                                        type='text'
                                        required
                                        placeholder='City'
                                        margin='normal'
                                    />
                                </Grid>
                                <Grid item xs={2}>
                                    <label className='text-left'>State</label>
                                    <select
                                        name='state'
                                        placeholder='State'
                                        required
                                    >
                                        {states.map(state => (
                                            <option key={state}>
                                                {state}
                                            </option>
                                        ))}
                                    </select>
                                </Grid>
                                <Grid item xs={3}>
                                    <label className='text-left'>Zip</label>
                                    <input
                                        id='zip'
                                        name='zip'
                                        type='number'
                                        required
                                        placeholder='Zip'
                                        margin='normal'
                                        onBlur={(e) => this.patientValidator('zip', e.target.value)}
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={1}>
                                <Grid item xs={3}>
                                    <label className='text-left'>Height</label>
                                    <input
                                        id='height'
                                        name='height'
                                        type='number'
                                        required
                                        placeholder='in inches'
                                        margin='normal'
                                        onBlur={(e) => this.patientValidator('height', e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={3}>
                                    <label className='text-left'>Weight</label>
                                    <input
                                        id='weight'
                                        name='weight'
                                        type='number'
                                        required
                                        placeholder='in Lbs.'
                                        margin='normal'
                                        onBlur={(e) => this.patientValidator('weight', e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={3}>
                                    <label className='text-left'>Age</label>
                                    <input
                                        id='age'
                                        name='age'
                                        type='number'
                                        required
                                        placeholder='Age'
                                        margin='normal'
                                        onBlur={(e) => this.patientValidator('age', e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={3}>
                                    <label className='text-left'>Gender</label>
                                    <select
                                        name='sex'
                                        placeholder='Gender'
                                        required
                                    >
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                </Grid>
                            </Grid>
                            <Grid container spacing={1}>
                                <Grid item xs={12} sm={6}>
                                    <label className='text-left'>SSN</label>
                                    <input
                                        id='ssn'
                                        name='ssn'
                                        type='text'
                                        required
                                        placeholder='SSN'
                                        margin='normal'
                                        onBlur={(e) => this.patientValidator('ssn', e.target.value)}
                                        maxLength={11}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <label className='text-left'>Insurance Provider</label>
                                    <input
                                        id='insurance'
                                        name='insurance'
                                        type='text'
                                        required
                                        placeholder='Insurance Provider'
                                        margin='normal'
                                    />
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={6}>
                                    <input
                                        type='submit'
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </form>
                    <Grid container direction='row-reverse'>
                        <Grid item xs={2}>
                            <button className='button muted-button' onClick={() => this.props.dispatch(actions.handleModal(false))}>Close</button>
                        </Grid>
                    </Grid>
                </Dialog>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        patientState: state.patient
    }
}


export default connect(mapStateToProps)(AddPatientForm)
