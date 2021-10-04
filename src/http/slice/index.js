import { createSlice } from '@reduxjs/toolkit';

export const httpSlice = createSlice({
  name: 'http',
  initialState: {
    loading: []
  },
  reducers: {
    setLoading: (state, action) => {
      const { type, reset } = action.payload;
      
      state.loading = (
        reset
        ? state.loading.filter(t => t !== type)
        : state.loading.concat(type)
      );
    }
  }
});

export const { setLoading } = httpSlice.actions;

export default httpSlice.reducer;

/** selectors */

export const isLoading = type => state => state.http.loading.includes(type);