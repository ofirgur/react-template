import { createSlice } from '@reduxjs/toolkit';
import { LOCATION_CHANGE } from 'connected-react-router';

import { createApiAction } from "../../http";

export const appSlice = createSlice({
  name: 'app',
  initialState: {},
  reducers: {
    initialize: (state, action) => {
      state.data = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
    .addDefaultCase((state, action) => {
        switch(action.type) {
            case LOCATION_CHANGE:
                console.log('LOCATION_CHANGE')
        }
    });
  }
});

export const { initialize } = appSlice.actions;

export default appSlice.reducer;

export const types = {
  GET_USER: 'GET_USER'
};
