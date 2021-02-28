import { takeEvery, put, call } from 'redux-saga/effects'
import { LOAD_DATA, putData } from '../actions/films'

function* workerLoadData() {
    const response = yield call(fetch, 'https://ghibliapi.herokuapp.com/films/');
    const data = yield call([response, 'json']);
    yield put(putData(data))
}

export function* watchLoadData() {
    yield takeEvery(LOAD_DATA, workerLoadData)
}