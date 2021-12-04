import { all, call, put, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { api } from '@utils';
import {
    getGamesSuccess,
    newGameSuccess,
    getGameDataSuccess,
} from '../slices/gameSlice';
import { Game, ApiError, DistributionCenter, Store } from '@sharedTypes';
import { apiErrorSaga } from './apiErrorSaga';
import { history } from '../../components/App/App';

interface NewGameResponse extends ApiError {
    game: Game;
    store: {
        storeId: number;
        gameId: number;
        store: string;
        stockRoom: string;
    };
    distributionCenter: {
        centerId: number;
        gameId: number;
        costs: string;
    };
}

interface GamesResponse extends ApiError {
    games: Game[];
}

interface GameDataResponse extends ApiError {
    store: Store;
    distributionCenter: DistributionCenter;
}

function* newGameSaga(action: PayloadAction) {
    const data: NewGameResponse = yield call(
        api.post,
        '/games',
        action.payload
    );
    if (data.statusCode >= 400) {
        if (data.statusCode >= 400) yield call(apiErrorSaga, data);
    } else {
        yield put(
            newGameSuccess({
                game: data.game,
                store: data.store,
                distributionCenter: data.distributionCenter,
            })
        );
        yield call(history.push, `/game/${data.game.gameId}`);
    }
}

function* getGamesSaga() {
    const data: GamesResponse = yield call(api.get, '/games');

    if (data.statusCode >= 400) yield call(apiErrorSaga, data);
    if (data.games) yield put(getGamesSuccess(data.games));
    // yield put(getGamesFailed(data.message));
}

function* getGameDataSaga(action: PayloadAction) {
    const data: GameDataResponse = yield call(
        api.get,
        `/games/${action.payload}`
    );

    if (data.statusCode >= 400) yield call(apiErrorSaga, data);
    if (data.store && data.distributionCenter) {
        yield put(getGameDataSuccess(data));
    }
    // TODO: getGameDataFailed
}

function* gameSaga() {
    yield all([
        takeLatest('game/newGameRequest', newGameSaga),
        takeLatest('game/getGamesList', getGamesSaga),
        takeLatest('game/getGameDataRequest', getGameDataSaga),
    ]);
}

export default gameSaga;
