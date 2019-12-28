import React, { Component } from 'react'
import { connect } from 'react-redux';
import EncounterTable from './EncounterTable';
import AddEncounterForm from './AddEncounterForm';
import * as actions from '../../Redux/Actions/encounterActions'
import EditEncounterForm from './EditEncounterForm';
/**
|--------------------------------------------------
| Holds all the encounter components
|--------------------------------------------------
*/
class Encounter extends Component {
    /**
     * Handles the opening and closing of the add encounter modal
     */
    handleOpen = (flag) => {
        this.props.dispatch(actions.handleAddOpen(flag))
    }
    /**
     * Sets the details for the encounter modal
     */
    setEncounterModalInfo = (id) => {
        let eList = this.props.encounterState.data;
        let details = [];
        for (let i = 0; i < eList.length; i++) {
            if (id === eList[i].encounterId) {
                details.push(eList[i])
            }
        }
        this.props.dispatch(actions.setEncounterDetails(details))
        this.props.dispatch(actions.setEditOpen(true))
    }

    render() {
        const { encounterState } = this.props
        return (
            <div>
                <EncounterTable
                    data={encounterState.patEncounters}
                    handleOpen={this.handleOpen}
                    setModal={this.setEncounterModalInfo}
                />
                <AddEncounterForm
                    open={encounterState.addOpen}
                />

                {encounterState.editOpen ? (
                    <EditEncounterForm
                        data={encounterState.modalInfo}
                        editing={encounterState.editing}
                        open={encounterState.editOpen}
                    />
                ) : (
                        <div></div>
                    )}

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


export default connect(mapStateToProps)(Encounter)