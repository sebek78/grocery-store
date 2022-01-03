import { all, fork } from 'redux-saga/effects';
import userSaga from './sagas/userSaga';
import gameSaga from './sagas/gameSaga';

export default function* rootSaga() {
    yield all([fork(userSaga), fork(gameSaga)]);
}
