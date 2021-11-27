import { take, put, call, takeLatest } from 'redux-saga/effects'
import { getCategoriesFailure,  getCategoriesSuccess, GET_CATEGORIES_LOADING } from '../Actions/categories.actions';
import { getCategories } from '../Api/Api';


function* getUsersSaga() {
    const response = yield call(getCategories);
    // function getFields(input, field1) {
    //     let output = [];
    //     for (let i=0; i < input.length ; ++i)
    //         output.push(input[i][field1]);
    //     return output;
    // }
    // console.log(response.data);
    
    const data = response.data;
    if (response.status !== 200) {
        yield take(getCategoriesFailure)
    }
    yield put(getCategoriesSuccess(data));
}
getUsersSaga();
export function* watchGetUsers() {
    yield takeLatest(GET_CATEGORIES_LOADING, getUsersSaga)
  }