import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import logger from 'redux-logger';
import reducers from '~/reducers';
import sagas from '~/sagas';

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware, logger];

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));
  const store = createStore(
    reducers,
    initialState,
    enhancer,
  );

  sagaMiddleware.run(function*() {
    yield all(sagas);
  });

  return store;
};
