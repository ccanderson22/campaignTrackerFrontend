import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as patientActions from '../../Redux/Actions/patientActions'


/**
|--------------------------------------------------
| Navigation bar 
|--------------------------------------------------
*/
class Navbar extends Component {
    /**
     * handles the change of showing which tab is selected
     */
    handleChange = (e, val) => {
        this.props.dispatch(patientActions.setValue(val))
    }
    render() {
        return (
            <div>
                <AppBar>
                    <Toolbar>
                        <Typography>
                            Super Health Inc
                        </Typography>
                        <Tabs value={this.props.patientState.value} onChange={this.handleChange} centered >
                            <Tab label='Patients' component={Link} to='/' />
                            {/* <Tab label='Details' component={Link} to='/details' /> */}
                        </Tabs>
                    </Toolbar>
                </AppBar>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        patientState: state.patient
    }
}


export default connect(mapStateToProps)(Navbar)
