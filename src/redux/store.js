import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
// import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from './rootReducer';

const middleware = [];

if (process.env.NODE_ENV === 'development') {
    middleware.push(logger);
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware))
);

export const persistor = persistStore(store);
