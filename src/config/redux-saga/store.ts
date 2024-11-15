import { configureStore } from '@reduxjs/toolkit';
import saga from 'redux-saga';
import RootSaga from './root-saga';
import rootRedux from './root-redux';
import { dcpInterceptors } from '../api/apiClient';

const sagaMiddleware = saga();

export default configureStore({
    reducer: rootRedux,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(RootSaga);
dcpInterceptors();