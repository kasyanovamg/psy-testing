import authReducer from './authReducer';
import projectReducer from './projectReducer';
import testReducers from './testReducers';
import generalReducers from './generalReducers';
import utils from './otherReducers';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    current: testReducers,
    result: generalReducers,
    utils: utils,
});

export default rootReducer