import { createSlice } from '@reduxjs/toolkit';
import { LOCATION_CHANGE } from 'connected-react-router';

export const appSlice = createSlice({
  name: 'user',
  initialState: {
    locale: 'en',
    currency: 'USD'
  },
  reducers: {
    setUser: (state, action) => {
      const { locale, currency } = action.payload;
      state.locale = locale;
      state.currency = currency;
    },
    setUserLocale: (state, action) => {
      state.locale = action.payload;
    },
    setUserCurrency: (state, action) => {
      state.currency = action.payload;
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

export const getUserLocale = state => state.user.locale;
export const getUserCurrency = state => state.user.currency;

