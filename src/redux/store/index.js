import { configureStore } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history'

import createRootMiddlewares from '../../redux/middlewares';
import createRootReducer from '../../redux/reducers';

export const history = createBrowserHistory();

export const store = configureStore({
    reducer: createRootReducer(),
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware().concat(createRootMiddlewares())   
    } 
});