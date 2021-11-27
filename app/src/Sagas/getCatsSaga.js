import {call, put, take, takeLatest} from 'redux-saga/effects'
import {GET_CATS_LOADING, getCatsFailure, getCatsSuccess} from '../Actions/cats.actions';
import {getCats} from "../Api/Api";


function* getCatSaga(action) {
    const response = yield call(getCats, action.categoryId, action.page);
    const data = response.data;
    if (response.status !== 200) {
        yield take(getCatsFailure)
    } else {
        yield put(getCatsSuccess(data));
    }
}

export function* watchGetCats() {
    yield takeLatest(GET_CATS_LOADING, getCatSaga)
}