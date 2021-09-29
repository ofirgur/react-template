import { createBrowserHistory } from 'history'
import { configureStore } from '@reduxjs/toolkit';

import createRootMiddlewares from '../../redux/middlewares';
import createRootReducer from '../../redux/reducers';

export const history = createBrowserHistory();

export const store = configureStore({
    reducer: createRootReducer(history),
    middleware: getDefaultMiddleware => getDefaultMiddleware()
        .concat(createRootMiddlewares(history))    
});