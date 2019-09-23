import {combineReducers} from 'redux';
import {login} from '../reducers/LoginReducer';
import {entry} from '../reducers/MainReducer';

const RootReducers = combineReducers({
    login: login,
    entry: entry});

export default RootReducers;