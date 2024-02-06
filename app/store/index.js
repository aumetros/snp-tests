'use client';
import { configureStore } from '@reduxjs/toolkit';
import modalsReducer from './slices/modalsSlice.js';
import messagesReducer from './slices/messagesSlice.js';

const store = configureStore({
	reducer: {
		modals: modalsReducer,
		messages: messagesReducer,
	},
});

export default store;
