'use client';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	message: '',
};

const messagesSlice = createSlice({
	name: 'messages',
	initialState,
	reducers: {
		setMessage(state, { payload }) {
			state.message = payload;
		},
	},
});

export const { setMessage } = messagesSlice.actions;

export default messagesSlice.reducer;
