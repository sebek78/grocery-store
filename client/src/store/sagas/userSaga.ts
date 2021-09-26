import { all, call, put, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import {
    userLoginSuccess,
    userLoginFailed,
    userLogoutSuccess,
    userLogoutFailed,
    registerUserSuccess,
    registerUserFailed,
} from '@userSlice';
import { api } from '@utils';
import { closeDialog, showSnackbar } from '@viewsSlice';

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

function* registerUserSaga(action: PayloadAction) {
    const data: Response = yield call(
        api.post,
        '/auth/register',
        action.payload
    );

    if (data.statusCode >= 400) {
        yield put(registerUserFailed(data.message));
    } else {
        yield put(closeDialog('register'));
        yield put(registerUserSuccess(data));
        yield put(
            showSnackbar({
                severity: 'success',
                message: 'Zarejestrowane. Możesz zalogować się.',
            })
        );
    }
}

function* userSaga() {
    yield all([
        takeLatest('user/userLoginRequest', loginUserSaga),
        takeLatest('user/userLogoutRequest', logoutUserSaga),
        takeLatest('user/registerUserRequest', registerUserSaga),
    ]);
}

export default userSaga;
