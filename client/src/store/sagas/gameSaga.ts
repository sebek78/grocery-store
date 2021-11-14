import { all, call, put, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { api } from '@utils';
import { getGamesSuccess } from '../slices/gameSlice';
import { Game, ApiError } from '@sharedTypes';
import { apiErrorSaga } from './apiErrorSaga';

interface NewGameResponse extends ApiError {}

interface GamesResponse extends ApiError {
    games: Game[];
}

function* newGameSaga(action: PayloadAction) {
    const data: NewGameResponse = yield call(
        api.post,
        '/games',
        action.payload
    );
    if (data.statusCode >= 400) {
        // yield put(newGameFailed(data.message));
    } else {
        // yield put(); history.push to game view
        // yield put(newGameSuccess(data));
    }
}

function* getGamesSaga() {
    const data: GamesResponse = yield call(api.get, '/games');

    if (data.statusCode >= 400) yield call(apiErrorSaga, data);
    if (data.games) yield put(getGamesSuccess(data.games));
    // yield put(getGamesFailed(data.message));
}

function* gameSaga() {
    yield all([
        takeLatest('game/newGameRequest', newGameSaga),
        takeLatest('game/getGamesList', getGamesSaga),
    ]);
}

export default gameSaga;
