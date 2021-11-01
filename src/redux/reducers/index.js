import { combineReducers } from 'redux';

import appSlice from '../../app/slice';
import userSlice from '../../user/slice';
import httpSlice from '../../redux-http/slice';
import siteMapSlice from '../../siteMap/slice';

const createReducer = (asyncReducers = {}) => {
    // no reducers yet - setting default one (avoid redux error)
    if (Object.keys(asyncReducers) === 0) return;
    // setting reducers
    return combineReducers(asyncReducers);
};

export default (asyncReducers = {}) =>{
    return combineReducers({
        app: appSlice,
        user: userSlice,
        http: httpSlice,
        siteMap: siteMapSlice,
        modules: createReducer(asyncReducers)
    });
}; 
