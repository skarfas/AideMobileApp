import {createStore} from 'redux';
import RootReducers from '../reducers/RootReducer'

export const dataStore = createStore(RootReducers);
