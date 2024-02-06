'use client';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import modalsReducer from './slices/modalsSlice.js';
import messagesReducer from './slices/messagesSlice.js';
import usersReducer from './slices/usersSlice.js';
import { sagas } from './sagas.js';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
	reducer: {
		modals: modalsReducer,
		messages: messagesReducer,
		users: usersReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(sagas);

export default store;
