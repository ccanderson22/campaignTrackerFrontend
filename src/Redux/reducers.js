import {combineReducers} from 'redux';
import patientReducer from '../Redux/Reducers/patientReducer'
import encounterReducer from '../Redux/Reducers/encounterReducer'

//reducers being combined
const defaultReducer = combineReducers({
    patient: patientReducer,
    encounter: encounterReducer
})

export default defaultReducer;