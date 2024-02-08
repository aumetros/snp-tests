'use client';
import { createSlice, createAction } from '@reduxjs/toolkit';
import { SIGN_UP, SIGN_IN } from 'utils/constants/saga_actions';

const initialState = {
	user: {},
	isLogged: false,
};

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		setUser(state, { payload }) {
			state.user = payload;
		},
		setLoggin(state, { payload }) {
			state.isLogged = payload;
		},
	},
});

export const signUpUser = createAction(SIGN_UP);
export const signInUser = createAction(SIGN_IN);

export const { setUser, setLoggin } = usersSlice.actions;

export default usersSlice.reducer;
