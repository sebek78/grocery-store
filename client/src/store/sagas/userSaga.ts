import { call, put, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { userLoginSuccess, userLoginFailed } from '../slices/userSlice';
import { api } from '@utils';

interface Error {
    statusCode: number;
    message: string;
}

interface Response extends Error {
    username: string;
}

function* loginUserSaga(action: PayloadAction) {
    console.log(action.payload);
    const data: Response = yield call(api.post, '/auth/login', action.payload);

    if (data.statusCode >= 400) {
        yield put(userLoginFailed(data.message));
    } else {
        console.log('success');
        console.log(data);
        // TODO: close login dialog
        yield put(userLoginSuccess(data));
    }
}

function* userSaga() {
    yield takeLatest('user/userLoginRequest', loginUserSaga);
}

export default userSaga;
