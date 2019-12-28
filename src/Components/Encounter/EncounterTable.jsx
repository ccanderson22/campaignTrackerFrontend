import React, { Component } from 'react'
/**
|--------------------------------------------------
| Table to display encounter data
|--------------------------------------------------
*/
export default class EncounterTable extends Component {
    render() {
        const { data, handleOpen, setModal } = this.props
        return (
            <div >
                <h3 className='text-center'>Encounters</h3>


                <table>
                    <thead>
                        <tr>
                            <td className='text-center'>Provider</td>
                            <td className='text-center'>Complaint</td>
                            <td className='text-center'>Blood Pressure</td>
                            <td className='text-center'>Copay</td>
                            <td className='text-center'>Total</td>
                        </tr>
                    </thead>
                    <tbody>
                        {data ? (
                            data.length > 0 ? (
                                data.map(data => (
                                    <tr key={data.encounterId}>
                                        <td className='text-center'>{data.provider}</td>
                                        <td className='text-center'>{data.chiefComplaint}</td>
                                        <td className='text-center'>{data.systolic}/{data.diastolic}</td>
                                        <td className='text-center'>{data.copay}</td>
                                        <td className='text-center'>{data.totalCost}</td>
                                        <td><button onClick={() => setModal(data.encounterId)} className='muted-button'>Details</button></td>
                                    </tr>

                                ))
                            ) : (
                                    <tr>
                                        <td>No Encounters</td>
                                    </tr>
                                )
                        ) : (
                                <tr>
                                    <td>Loading...</td>
                                </tr>

                            )}
                    </tbody>
                </table>
                <p className='vertical-center'><button onClick={() => handleOpen(true)}>Add encounter</button></p>
            </div>
        )
    }
}
