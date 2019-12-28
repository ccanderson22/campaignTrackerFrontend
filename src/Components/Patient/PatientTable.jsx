import './Patient.css'
import Tab from '@material-ui/core/Tab';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
/**
|--------------------------------------------------
| Table for patient information
|--------------------------------------------------
*/
export default class PatientTable extends Component {

    /**
     * Renders the patient table
     */
    render() {
        //Props being used
        const { data, handleModal, setModalInfo, success } = this.props
        return (
            <div className="patient-table">
                <h1>Patients </h1>
                <button onClick={() => handleModal(true)}>Add new patient</button>
                {success.length > 0 ? (<h3 className='text-center success'>{success}</h3>) : (<div></div>)}
                <table >
                    <thead>
                        <tr>
                            <th className="text-center">Name</th>
                            <th className="text-center">Age</th>
                            <th className="text-center">Gender</th>
                            <th className="text-center"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data ? (
                            data.length > 0 ? (
                                data.map(data => (
                                    <tr key={data.patientId.toString()} >
                                        <td className="text-center ">{data.firstName} {data.lastName}</td>
                                        <td className="text-center">{data.age}</td>
                                        <td className="text-center">{data.sex}</td>
                                        <td><Tab onClick={() => setModalInfo(data.patientId)} label='Details' component={Link} to='/details' /></td>
                                    </tr>
                                ))
                            ) : (
                                    <tr>
                                        <td>No Patients</td>
                                    </tr>
                                )
                        ) : (
                                <tr>
                                    <td>Loading....</td>
                                </tr>
                            )}
                    </tbody>
                </table>
            </div>
        )
    }
}
