import { configureStore } from '@reduxjs/toolkit';

import createRootMiddlewares from '../../redux/middlewares';
import createRootReducer from '../../redux/reducers';

export const store = configureStore({
    reducer: createRootReducer(),
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware().concat(createRootMiddlewares())
    }
});

store.asyncReducers = {};

export const injectReducer = (name, reducer) => {
    // ignore injected reducers if exists
    if (store.asyncReducers.hasOwnProperty(name)) return;

    store.asyncReducers[name] = reducer;
    store.replaceReducer(createRootReducer(store.asyncReducers));
};
