import { createBrowserHistory } from 'history'
import { configureStore } from '@reduxjs/toolkit';
import { routerMiddleware } from 'connected-react-router'
import logger from 'redux-logger'

import createRootReducer from '../../redux/reducers';

export const history = createBrowserHistory();

export const store = configureStore({
    reducer: createRootReducer(history),
    middleware: getDefaultMiddleware => getDefaultMiddleware()
        .concat(logger)
        .concat(routerMiddleware(history))
});