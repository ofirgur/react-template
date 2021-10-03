import { createSlice } from '@reduxjs/toolkit';

export const httpSlice = createSlice({
  name: 'http',
  initialState: {},
  reducers: {
    setFetching: (state, action) => {
      state.fetching = action.payload;
    }
  }
});

export const { setFetching } = httpSlice.actions;

export default httpSlice.reducer;

/** selectors */

export const isFetching = type => state => type === state.http.fetching;