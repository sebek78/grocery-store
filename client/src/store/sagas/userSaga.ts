import { put, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { userLoginSuccess } from '../slices/userSlice';

function* loginUserSaga(action: PayloadAction) {
    yield put(userLoginSuccess('TEST'));
}

function* userSaga() {
    yield takeLatest('user/userLoginRequest', loginUserSaga);
}

export default userSaga;
