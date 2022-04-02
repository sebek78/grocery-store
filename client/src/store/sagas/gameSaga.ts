import { all, call, put, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { api } from '@utils';
import {
    newGameSuccess,
    getGamesSuccess,
    getGamesFailed,
    getGameDataSuccess,
    getGamesDataFailed,
    deleteGameSuccess,
    deleteGameFailed,
    newGameFailed,
} from '../slices/gameSlice';
import {
    Game,
    ApiError,
    DistributionCenter,
    Store,
    SuccessResponse,
    CustomersDTO,
} from '@sharedTypes';
import { apiErrorSaga } from './apiErrorSaga';
import { history } from '@pages';
import { showSnackbar } from '@viewsSlice';

interface NewGameResponse extends ApiError {
    game: Game;
    store: Store;
    distributionCenter: DistributionCenter;
    customers: CustomersDTO;
}

interface GamesResponse extends ApiError {
    games: Game[];
}

interface GameDataResponse extends ApiError {
    store: Store;
    distributionCenter: DistributionCenter;
    customers: CustomersDTO;
}

function* newGameSaga(action: PayloadAction) {
    const data: NewGameResponse = yield call(
        api.post,
        '/games',
        action.payload
    );
    if (data.statusCode >= 400) {
        if (data.statusCode >= 400) yield call(apiErrorSaga, data);
        yield put(newGameFailed(data.message));
        yield put(
            showSnackbar({
                severity: 'error',
                message: data.message,
            })
        );
    } else {
        yield put(
            newGameSuccess({
                game: data.game,
                store: data.store,
                distributionCenter: data.distributionCenter,
                customers: data.customers,
            })
        );
        yield call(history.push, `/game/${data.game.gameId}`);
    }
}

function* getGamesSaga() {
    const data: GamesResponse = yield call(api.get, '/games');

    if (data.statusCode >= 400) yield call(apiErrorSaga, data);
    if (data.games) {
        yield put(getGamesSuccess(data.games));
    } else {
        yield put(getGamesFailed('Błąd pobierania listy gier.'));
        yield put(
            showSnackbar({
                severity: 'error',
                message: 'Błąd pobierania listy gier.',
            })
        );
    }
}

function* getGameDataSaga(action: PayloadAction) {
    const data: GameDataResponse = yield call(
        api.get,
        `/games/${action.payload}`
    );

    if (data.statusCode >= 400) yield call(apiErrorSaga, data);
    if (data.store && data.distributionCenter) {
        yield put(getGameDataSuccess(data));
    } else {
        yield put(getGamesDataFailed('Błąd pobierania danych sklepu.'));
        yield put(
            showSnackbar({
                severity: 'error',
                message: 'Błąd pobierania danych sklepu.',
            })
        );
    }
}

function* deleteGameSaga(action: PayloadAction<number>) {
    const data: SuccessResponse = yield call(
        api.deleteOne,
        `/games/${action.payload}`
    );
    if (data.statusCode >= 400) yield call(apiErrorSaga, data);
    if (data.success) {
        yield put(deleteGameSuccess(action.payload));
    } else {
        yield put(deleteGameFailed());
        yield put(
            showSnackbar({
                severity: 'error',
                message: 'Błąd usuwania gry.',
            })
        );
    }
}

function* gameSaga() {
    yield all([
        takeLatest('game/newGameRequest', newGameSaga),
        takeLatest('game/getGamesList', getGamesSaga),
        takeLatest('game/getGameDataRequest', getGameDataSaga),
        takeLatest('game/deleteGame', deleteGameSaga),
    ]);
}

export default gameSaga;
