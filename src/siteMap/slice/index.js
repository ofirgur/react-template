import { createSlice } from '@reduxjs/toolkit';

import siteMap from '..'; 
import { handleDeeplink } from '../deeplinks';
import { buildEligibleRoutes, searchRouteFallback, searchRoute } from '../eligibility';

export const siteMapSlice = createSlice({
  name: 'siteMap',
  initialState: {},
  reducers: {
    setEligibleRoutes: (state, { payload }) => {
      const { eligibility } = payload;
      state.eligibleRoutes = buildEligibleRoutes(eligibility)(siteMap);
    },
    setCurrentRoute: (state, { payload }) => {
      const { pathname } = payload;
      state.currentRoute = searchRouteFallback(state.eligibleRoutes, pathname);
    },
  }
});

export const { setEligibleRoutes, setCurrentRoute } = siteMapSlice.actions;

export default siteMapSlice.reducer;

export const getState = state => state.siteMap;
export const getEligibleRoutes = state => getState(state).eligibleRoutes;
export const getCurrentRoute = state => getState(state).currentRoute;
export const getEligibleRoute = state => search => {
  return searchRoute(getState(state).eligibleRoutes, search);
};
export const getDeeplink = state => (deeplinks, location) => {
  return handleDeeplink(getState(state).eligibleRoutes)(deeplinks, location);
};


