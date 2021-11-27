
import { combineReducers } from 'redux';
import categoriesReducer from './properties.reducer';

export const rootReducer = combineReducers({
    categories: categoriesReducer,
});

export default rootReducer;