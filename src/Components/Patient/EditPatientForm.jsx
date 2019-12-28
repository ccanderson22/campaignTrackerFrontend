import React, { Component } from 'react'
import { Grid, Paper } from '@material-ui/core'
import * as actions from '../../Redux/Actions/patientActions'
import { connect } from 'react-redux';
/**
|--------------------------------------------------
| Edit patient form
|--------------------------------------------------
*/
class EditPatientForm extends Component {
    /**
     * Runs when the component mounts
     */
    componentDidMount = () => {
        this.props.dispatch(actions.setError(''))
    }

    /**
     * HAndles the deleting of a patient
     */
    handleDelete = (id) => {
        if (this.props.encounterState.patEncounters.length > 0) {
            this.props.dispatch(actions.setError('You cannot delete a patient with open encounters.'))
        } else {
            this.props.dispatch(actions.deletePatientAsync(id))
            this.props.dispatch(actions.setModalInfo(''))
            
        }
    }
    /**
     * Handles the submit of the edit patient for
     */
    handleSubmit = (e) => {
        e.preventDefault();
        let id = this.props.data.patientId
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
            patientId: id,
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
        this.props.dispatch(actions.updatePatientAsync(newPatient))
        this.props.dispatch(actions.setModalInfo(newPatient))
    }
    /**
     * Handles validation for the edit patient form
     */
    patientValidator = (type, value) => {
        let error = []


        if (type === 'ssn') {
            if (!value.match(/([0-9]{3}-[0-9]{2}-[0-9]{4})/)) {
                error.push('SSN must be in standard format, Ex. 123-23-1234')
            } 
        }
        if (type === 'height') {
            if (value > 99) {
                error.push('Patient height cannot exceed 99 inches')
            } 
        }
        if (type === 'weight') {
            if (value > 999) {
                error.push('Patient weight cannot exceed 999 lbs')
            } 
        }
        if (type === 'age') {
            if (value > 130) {
                error.push('Patient age cannot exceed 130 years')
            } 
        }
        if (type === 'name') {
            if (!value.match(/^[a-zA-Z](?:[ '.\-a-zA-Z]*[a-zA-Z])?$/)) {
                error.push('Name cannot be blank, and must only include letter, hyphens or apostrophes')
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
        const {  data, patientState } = this.props
        return (
            <div >
                <Paper>
                    <form className='add-edit' onSubmit={this.handleSubmit}>
                        {patientState.errors.length > 0 ? (<h3 className='error text-center'>{patientState.errors}</h3>) : (<h3 className='text-center modal-top'>Edit patient</h3>)}
                        <Grid container spacing={1}>
                            <Grid container spacing={1}>
                                <Grid item xs={12} sm={6}>
                                    {patientState.editing ? (
                                        <div>
                                            <label className='text-left'>First Name</label>
                                            <input
                                                id='firstName'
                                                name='firstName'
                                                type='text'
                                                required
                                                placeholder='First Name'
                                                margin='normal'
                                                defaultValue={data.firstName}
                                                onBlur={(e) => this.patientValidator('name', e.target.value)}
                                            />
                                        </div>
                                    ) : (
                                            <div className='text-left'>
                                                <label>First Name</label>
                                                <p>{data.firstName}</p>
                                            </div>
                                        )}

                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    {patientState.editing ? (
                                        <div>
                                            <label className='text-left'>Last Name</label>
                                            <input
                                                id='lastName'
                                                name='lastName'
                                                type='text'
                                                required
                                                placeholder='Last Name'
                                                margin='normal'
                                                defaultValue={data.lastName}
                                                onBlur={(e) => this.patientValidator('name', e.target.value)}
                                            />
                                        </div>
                                    ) : (
                                            <div className='text-left'>
                                                <label >Last Name</label>
                                                <p>{data.lastName}</p>
                                            </div>
                                        )}

                                </Grid>
                            </Grid>

                            <Grid item xs={12}>
                                {patientState.editing ? (
                                    <div>
                                        <label className='text-left'>Street</label>
                                        <input
                                            id='street'
                                            name='street'
                                            type='text'
                                            required
                                            placeholder='Street name'
                                            margin='normal'
                                            defaultValue={data.address ? (`${data.address.street}`) : ("")}
                                        />
                                    </div>
                                ) : (
                                        <div className='text-left'>
                                            <label>Street</label>
                                            <p>{data.address ? (`${data.address.street}`) : ("")}</p>
                                        </div>
                                    )}

                            </Grid>

                            <Grid container spacing={1}>
                                <Grid item xs={7}>
                                    {patientState.editing ? (
                                        <div>
                                            <label className='text-left'>City</label>
                                            <input
                                                id='city'
                                                name='city'
                                                type='text'
                                                required
                                                placeholder='City'
                                                margin='normal'
                                                defaultValue={data.address ? (`${data.address.city}`) : ("")}
                                            />
                                        </div>
                                    ) : (
                                            <div className='text-left'>
                                                <label>City</label>
                                                <p>{data.address ? (`${data.address.city}`) : ("")}</p>
                                            </div>
                                        )}

                                </Grid>
                                <Grid item xs={2}>
                                    {patientState.editing ? (
                                        <div>
                                            <label className='text-left'>State</label>
                                            <select
                                                name='state'
                                                placeholder='State'
                                                required
                                                defaultValue={data.address ? (`${data.address.state}`) : ("")}
                                            >
                                                {states.map(state => (
                                                    <option key={state}>
                                                        {state}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    ) : (
                                            <div className='text-left'>
                                                <label>State</label>
                                                <p>{data.address ? (`${data.address.state}`) : ("")}</p>
                                            </div>
                                        )}


                                </Grid>
                                <Grid item xs={3}>
                                    {patientState.editing ? (
                                        <div>
                                            <label className='text-left'>Zip</label>
                                            <input
                                                id='zip'
                                                name='zip'
                                                type='number'
                                                required
                                                placeholder='Zip'
                                                margin='normal'
                                                defaultValue={data.address ? (`${data.address.zip}`) : ("")}
                                                onBlur={(e) => this.patientValidator('name', e.target.value)}
                                            />
                                        </div>
                                    ) : (
                                            <div className='text-left'>
                                                <label>Zip code</label>
                                                <p>{data.address ? (`${data.address.zip}`) : ("")}</p>
                                            </div>
                                        )}

                                </Grid>
                            </Grid>
                            <Grid container spacing={1}>
                                <Grid item xs={3}>
                                    {patientState.editing ? (
                                        <div>
                                            <label className='text-left'>Height</label>
                                            <input
                                                id='height'
                                                name='height'
                                                type='number'
                                                required
                                                placeholder='in inches'
                                                margin='normal'
                                                defaultValue={data.height}
                                                onBlur={(e) => this.patientValidator('height', e.target.value)}
                                            />
                                        </div>
                                    ) : (
                                            <div className='text-left'>
                                                <label>Height</label>
                                                <p>{data.height}</p>
                                            </div>
                                        )}

                                </Grid>
                                <Grid item xs={3}>
                                    {patientState.editing ? (
                                        <div>
                                            <label className='text-left'>Weight</label>
                                            <input
                                                id='weight'
                                                name='weight'
                                                type='number'
                                                required
                                                placeholder='in Lbs.'
                                                margin='normal'
                                                defaultValue={data.weight}
                                                onBlur={(e) => this.patientValidator('weight', e.target.value)}
                                            />
                                        </div>
                                    ) : (
                                            <div className='text-left'>
                                                <label>Weight</label>
                                                <p>{data.weight}</p>
                                            </div>
                                        )}

                                </Grid>
                                <Grid item xs={3}>
                                    {patientState.editing ? (
                                        <div>
                                            <label className='text-left'>Age</label>
                                            <input
                                                id='age'
                                                name='age'
                                                type='number'
                                                required
                                                placeholder='Age'
                                                margin='normal'
                                                defaultValue={data.age}
                                                onBlur={(e) => this.patientValidator('age', e.target.value)}
                                            />
                                        </div>
                                    ) : (
                                            <div className='text-left'>
                                                <label>Age</label>
                                                <p>{data.age}</p>
                                            </div>
                                        )}

                                </Grid>
                                <Grid item xs={3}>
                                    {patientState.editing ? (
                                        <div>
                                            <label className='text-left'>Gender</label>
                                            <select
                                                name='sex'
                                                placeholder='Gender'
                                                required
                                                defaultValue={data.sex}
                                            >
                                                <option>Male</option>
                                                <option>Female</option>
                                            </select>
                                        </div>
                                    ) : (
                                            <div className='text-left'>
                                                <label>Gender</label>
                                                <p>{data.sex}</p>
                                            </div>
                                        )}

                                </Grid>
                            </Grid>
                            <Grid container spacing={1}>
                                <Grid item xs={12} sm={6}>
                                    {patientState.editing ? (
                                        <div>
                                            <label className='text-left'>SSN</label>
                                            <input
                                                id='ssn'
                                                name='ssn'
                                                type='text'
                                                required
                                                placeholder='SSN'
                                                margin='normal'
                                                defaultValue={data.ssn}
                                                onBlur={(e) => this.patientValidator('ssn', e.target.value)}
                                                maxLength={11}
                                            />
                                        </div>
                                    ) : (
                                            <div className='text-left'>
                                                <label>Social Security Number</label>
                                                <p>{data.ssn}</p>
                                            </div>
                                        )}


                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    {patientState.editing ? (
                                        <div>
                                            <label className='text-left'>Insurance Provider</label>
                                            <input
                                                id='insurance'
                                                name='insurance'
                                                type='text'
                                                required
                                                placeholder='Insurance Provider'
                                                margin='normal'
                                                defaultValue={data.insurance}
                                            />
                                        </div>
                                    ) : (
                                            <div className='text-left'>
                                                <label>Insurance Provider</label>
                                                <p>{data.insurance}</p>
                                            </div>
                                        )}

                                </Grid>
                            </Grid>
                            <Grid container direction='row-reverse'>
                                <Grid item xs={2}>
                                    {patientState.editing ? (
                                        <div>
                                            <input
                                                type='submit'
                                            />
                                        </div>
                                    ) : (
                                            <div>
                                                <button className='muted-button' onClick={() => this.props.dispatch(actions.handleEditing(true))}>Edit Patient</button>
                                            </div>
                                        )}

                                </Grid>
                                <Grid item xs={6}>
                                    {patientState.editing ? (
                                        <div>
                                            <button className='muted-button' onClick={() => this.props.dispatch(actions.handleEditing(false))}>Cancel Edit</button>
                                        </div>
                                    ) : (
                                            <div></div>
                                        )}
                                </Grid>
                            </Grid>
                        </Grid>
                    </form>
                    <Grid container>
                        <Grid item xs={6}>
                            {patientState.editing ? (<button className='button' id='delete-btn' onClick={() => this.handleDelete(data.patientId)}>DELETE</button>) : ('')}
                        </Grid>
                    </Grid>
                </Paper>






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


export default connect(mapStateToProps)(EditPatientForm)
