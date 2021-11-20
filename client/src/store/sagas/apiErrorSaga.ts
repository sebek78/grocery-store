import { ApiError } from '@sharedTypes';
import { put } from 'redux-saga/effects';
import { showSnackbar } from '@viewsSlice';
import { unauthorized } from '@userSlice';

export function* apiErrorSaga<T extends ApiError>(data: T) {
    switch (data.statusCode) {
        case 401:
            yield put(
                showSnackbar({
                    severity: 'error',
                    message: 'Jesteś nie zalogowany/-a!',
                })
            );
            yield put(unauthorized());
            break;
        case 500:
            yield put(
                showSnackbar({
                    severity: 'error',
                    message: 'Połączenie z serwerem nie powiodło się',
                    autoHideDuration: null,
                })
            );
            break;
        default:
            console.log(data);
    }
}
