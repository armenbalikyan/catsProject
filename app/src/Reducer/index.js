import {combineReducers} from 'redux';
import categoriesReducer from './category.reducer';
import catsReducer from "./cat.reducer";

export const rootReducer = combineReducers({
    categories: categoriesReducer,
    cats: catsReducer
});

export default rootReducer;