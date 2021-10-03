import { createSlice } from '@reduxjs/toolkit';

export const httpSlice = createSlice({
  name: 'http',
  initialState: {},
  reducers: {
    setFetching: (state, action) => {
      state.request = {
        url,
        isFetching: true
      };
    }
  }
});

// Action creators are generated for each case reducer function
export const { setFetching } = httpSlice.actions;

export default httpSlice.reducer;