import { all, call, put, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { api } from '@utils';

interface Error {
    statusCode: number;
    message: string;
}

interface Response extends Error {
    username: string;
}

function* newGameSaga(action: PayloadAction) {
    console.log(action.payload);
    const data: Response = yield call(api.post, '/game/new', action.payload);
    console.log(data);
    if (data.statusCode >= 400) {
        // yield put(newGameFailed(data.message));
    } else {
        // yield put(); history.push to game view
        // yield put(newGameSuccess(data));
    }
}

function* gameSaga() {
    yield all([takeLatest('game/newGameRequest', newGameSaga)]);
}

export default gameSaga;
