import { put, takeEvery } from 'redux-saga/effects';
import { signUpApi, signInApi } from 'utils/actions/auth';
import { setMessage } from './slices/messagesSlice';
import { setUser } from './slices/usersSlice';
import { openModal } from './slices/modalsSlice';
import { SIGN_UP, SIGN_IN } from 'utils/constants/saga_actions';

export function* signUpSaga({ payload }) {
	try {
		const user = yield signUpApi(payload);
		console.log(user);
		yield put(setUser(user));
	} catch (err) {
		yield put(setMessage(err.message));
		yield put(openModal('errorModal'));
	}
}

export function* signInSaga({ payload }) {
	try {
		const user = yield signInApi(payload);
		console.log(user);
		yield put(setUser(user));
	} catch (err) {
		yield put(setMessage(err.message));
		yield put(openModal('errorModal'));
	}
}

export function* sagas() {
	yield takeEvery(SIGN_UP, signUpSaga);
	yield takeEvery(SIGN_IN, signInSaga);
}
