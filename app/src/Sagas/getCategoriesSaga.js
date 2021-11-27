import {call, put, take, takeLatest} from 'redux-saga/effects'
import {GET_CATEGORIES_LOADING, getCategoriesFailure, getCategoriesSuccess} from '../Actions/categories.actions';
import {getCategories} from '../Api/Api';


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