import { createSlice } from '@reduxjs/toolkit';
import { LOCATION_CHANGE } from 'connected-react-router';

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

// Action creators are generated for each case reducer function
export const { initialize } = appSlice.actions;

export default appSlice.reducer;