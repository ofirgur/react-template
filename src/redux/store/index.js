import { configureStore } from '@reduxjs/toolkit';

import createRootMiddlewares from '../../redux/middlewares';
import createRootReducer from '../../redux/reducers';

export const store = configureStore({
    reducer: createRootReducer(),
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware().concat(createRootMiddlewares())
    }
});

// redux code splitting
store.asyncReducers = {};
export const injectReducer = (key, asyncReducer) => {
    if (store.asyncReducers.hasOwnProperty(key)) 
        return;

    store.asyncReducers[key] = asyncReducer;
    store.replaceReducer(createRootReducer(store.asyncReducers));
};
