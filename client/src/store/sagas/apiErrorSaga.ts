import { ApiError } from '@sharedTypes';
import { put } from 'redux-saga/effects';
import { showSnackbar } from '@viewsSlice';
import { unauthorized } from '@userSlice';

export function* apiErrorSaga<T extends ApiError>(data: T) {
    if (data.statusCode === 401) {
        yield put(
            showSnackbar({
                severity: 'error',
                message: 'Jesteś nie zalogowany/-a!',
            })
        );
        yield put(unauthorized());
    } else {
        console.log(data);
    }
}
