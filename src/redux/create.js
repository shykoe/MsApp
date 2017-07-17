import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import { AsyncStorage } from 'react-native';
import reducers from './reducers';
import sagas from './sagas';
import { createLogger } from 'redux-logger';
const __DEVELOPMENT__ = true;
const __CLIENT__ = true;

let storeRef = null;

export default function create(data) {
  const enhancers = [];
  const sagaMiddleware = createSagaMiddleware();

  const middleware = [
    sagaMiddleware,
  ];

  enhancers.push(applyMiddleware(...middleware, createLogger()));
  if (__DEVELOPMENT__) {
    enhancers.push(
      __CLIENT__ &&
      typeof window.devToolsExtension !== 'undefined' ?
        window.devToolsExtension() :
        f => f
    );
  }

  const store = createStore(reducers, data, compose(...enhancers));


  if (__DEVELOPMENT__ && module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(require('./reducers'));
    });
  }

  storeRef = store;
  store.rootTask = sagaMiddleware.run(sagas);
  store.close = () => store.dispatch(END);

  return store;
}