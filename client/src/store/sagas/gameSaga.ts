import { all, call, put, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { api } from '@utils';
import { getGamesSuccess, newGameSuccess } from '../slices/gameSlice';
import { Game, ApiError } from '@sharedTypes';
import { apiErrorSaga } from './apiErrorSaga';
import { history } from '../../components/App/App';

interface NewGameResponse extends ApiError {
    game: Game;
    store: any; // TODO types
    distributionCenter: any; // TODO type
}

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
        if (data.statusCode >= 400) yield call(apiErrorSaga, data);
    } else {
        // TODO: move logic to helpers
        const parsedStore = {
            ...data.store,
            store: JSON.parse(data.store.store),
            stockRoom: JSON.parse(data.store.stockRoom),
        };
        const parsedCenter = {
            ...data.distributionCenter,
            costs: data.distributionCenter.costs.split(','),
        };
        yield put(
            newGameSuccess({
                game: data.game,
                store: parsedStore,
                distributionCenter: parsedCenter,
            })
        );
        yield call(history.push, `/game/store/${parsedStore.storeId}`);
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
