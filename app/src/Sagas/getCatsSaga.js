import { take, put, call, takeLatest } from 'redux-saga/effects'
import { getCatsFailure,  getCatsSuccess, GET_CATS_LOADING } from '../Actions/cats.actions';
import {getCats} from "../Api/Api";
import {watchGetCategories} from "./getCategoriesSaga";


function* getCatSaga(action) {
    const response = yield call(getCats, action.categoryId);
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