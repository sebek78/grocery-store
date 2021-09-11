import { all, call, put, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import {
    userLoginSuccess,
    userLoginFailed,
    userLogoutSuccess,
    userLogoutFailed,
} from '@userSlice';
import { api } from '@utils';
import { closeDialog } from '@viewsSlice';

interface Error {
    statusCode: number;
    message: string;
}

interface Response extends Error {
    username: string;
}

function* loginUserSaga(action: PayloadAction) {
    const data: Response = yield call(api.post, '/auth/login', action.payload);

    if (data.statusCode >= 400) {
        yield put(userLoginFailed(data.message));
    } else {
        yield put(closeDialog('login'));
        yield put(userLoginSuccess(data));
    }
}

function* logoutUserSaga() {
    const data: Response = yield call(api.post, '/auth/logout', null);
    if (data.statusCode >= 400) {
        yield put(userLogoutFailed(data.message));
    } else {
        yield put(userLogoutSuccess());
    }
}

function* userSaga() {
    yield all([
        takeLatest('user/userLoginRequest', loginUserSaga),
        takeLatest('user/userLogoutRequest', logoutUserSaga),
    ]);
}

export default userSaga;
