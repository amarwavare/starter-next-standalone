import { combineReducers } from 'redux';
import { dcpBaseReducer } from './constants';
import DCPBaseReducer from '@/modules/base/redux-saga/reducer';

export default combineReducers({
    [dcpBaseReducer]: DCPBaseReducer
});