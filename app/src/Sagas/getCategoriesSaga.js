import { take, put, call, takeLatest } from 'redux-saga/effects'
import { getCategoriesFailure,  getCategoriesSuccess, GET_CATEGORIES_LOADING } from '../Actions/categories.actions';
import {getCategories, getCats} from '../Api/Api';
import {GET_CATS_LOADING, getCatsFailure, getCatsSuccess} from "../Actions/cats.actions";


function* getCategorySaga() {
    const response = yield call(getCategories);
    const data = response.data;
    if (response.status !== 200) {
        yield take(getCategoriesFailure)
    }
    yield put(getCategoriesSuccess(data));
}

export function* watchGetCategories() {
    yield takeLatest(GET_CATEGORIES_LOADING, getCategorySaga);
}