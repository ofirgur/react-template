import { createSlice } from '@reduxjs/toolkit';

export const templateSlice = createSlice({
  name: 'template',
  initialState: {
    data: {}
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    }
  }
});

export const { setData } = templateSlice.actions;

export default templateSlice.reducer;

export const types = {
  GET_DATA: 'FETCH_DATA'
};

export const getState = state => state.modules.template;
export const getData = state => getState(state).data;


