import { all, call, put, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { api } from '@utils';
import { getGamesSuccess } from '../slices/gameSlice';
import { Game } from '@sharedTypes';

interface Error {
    statusCode: number;
    message: string;
}

interface NewGameResponse extends Error {}

interface GamesResponse extends Error {
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

function* getGamesSaga(action: PayloadAction) {
    const data: GamesResponse = yield call(api.get, '/games');

    if (data.statusCode >= 400) {
        // TODO: errors
        // yield put(newGameFailed(data.message));
    } else {
        if (data.games) yield put(getGamesSuccess(data.games));
    }
}

function* gameSaga() {
    yield all([
        takeLatest('game/newGameRequest', newGameSaga),
        takeLatest('game/getGamesList', getGamesSaga),
    ]);
}

export default gameSaga;
