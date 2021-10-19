import { createSlice } from '@reduxjs/toolkit';
import { LOCATION_CHANGE } from 'connected-react-router';

//import { searchRouteFallback } from '../../siteMap/eligibility'; 

export const appSlice = createSlice({
  name: 'app',
  initialState: {},
  reducers: {}
});

export const {  } = appSlice.actions;

export default appSlice.reducer;


