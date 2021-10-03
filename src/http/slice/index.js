import { createSlice } from '@reduxjs/toolkit';

export const httpSlice = createSlice({
  name: 'http',
  initialState: {
    fetching: []
  },
  reducers: {
    setFetching: (state, action) => {
      const { type, reset } = action.payload;
      
      state.fetching = (
        reset
        ? state.fetching.filter(t => t !== type)
        : state.fetching.concat(type)
      );
    }
  }
});

export const { setFetching } = httpSlice.actions;

export default httpSlice.reducer;

/** selectors */

export const isFetching = type => state => state.http.fetching.includes(type);