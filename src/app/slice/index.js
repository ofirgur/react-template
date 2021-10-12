import { createSlice } from '@reduxjs/toolkit';
import { LOCATION_CHANGE } from 'connected-react-router';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    user: {
      locale: 'en',
      currency: 'USD'
    }
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setUserLocale: (state, action) => {
      state.user.locale = action.payload;
    },
    setUserCurrency: (state, action) => {
      state.user.currency = action.payload;
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

export const { setUser, setUserLocale, setUserCurrency } = appSlice.actions;

export default appSlice.reducer;

export const types = {
  GET_USER: 'GET_USER'
};

export const getUserLocale = state => state.app.user.locale;
export const getUserCurrency = state => state.app.user.currency;

