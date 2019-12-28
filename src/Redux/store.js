import {
    createStore,
    compose,
    applyMiddleware
} from 'redux';
import defaultReducer from './reducers.js';
import createSagaMiddleware from 'redux-saga';
import { watchCampaignsAsync } from '../Redux/Sagas/campaignSaga'
import { watchNpcsAsync } from '../Redux/Sagas/npcSaga'

const sagaMiddleware = createSagaMiddleware();

//store setup
const store = createStore(defaultReducer,
    compose(
        applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    ));

sagaMiddleware.run(watchCampaignsAsync)
sagaMiddleware.run(watchNpcsAsync)
export default store;