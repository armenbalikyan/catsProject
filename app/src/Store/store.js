import {createStore,compose,applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk';
import rootReducer from '../Reducer';
import { initSagas } from '../Sagas/initSagas';


const sagaMiddleware = createSagaMiddleware();
const middleWare = [sagaMiddleware,thunk];
const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(...middleWare),
    ),
)
initSagas(sagaMiddleware)
console.info('Saga middleware implemented');
export default store;