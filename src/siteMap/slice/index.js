import { createSlice } from '@reduxjs/toolkit';
import { LOCATION_CHANGE } from 'connected-react-router';

import siteMap from '../index'; 
import { buildEligibleRoutes, searchRouteFallback } from '../eligibility';

export const siteMapSlice = createSlice({
  name: 'siteMap',
  initialState: {},
  reducers: {
      setEligibleRoutes: (state, { payload }) => {
        const { eligibility } = payload;
        state.eligibleRoutes = buildEligibleRoutes(eligibility)(siteMap);
      },
      setCurrentRoute: state => {
        state.currentRoute = searchRouteFallback(state.eligibleRoutes, window.location.pathname);
      },
  }
});

export const { setEligibleRoutes, setCurrentRoute } = siteMapSlice.actions;

export default siteMapSlice.reducer;

export const getState = state => state.siteMap;
export const getEligibleRoutes = state => getState(state).eligibleRoutes;


