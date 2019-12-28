import React, { Component } from 'react'
import { Route, Switch} from 'react-router-dom'
import Patient from '../Patient/Patient'
import PatientDetails from '../Patient/PatientDetails'
/**
|--------------------------------------------------
| Routes for the navbar
|--------------------------------------------------
*/
export default class Routes extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={Patient}/>
                    <Route exact path='/details' component={PatientDetails}/>
                </Switch>
            </div>
        )
    }
}
