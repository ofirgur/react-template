import { createSlice } from '@reduxjs/toolkit';
import { LOCATION_CHANGE } from 'connected-react-router';

export const appSlice = createSlice({
  name: 'user',
  initialState: {
    data: {}
  },
  reducers: {
    setUser: (state, action) => {
      const { locale, currency, date } = action.payload;
      state.data = action.payload;
    },
    setUserLocale: (state, action) => {
      state.data.locale = action.payload;
    },
    setUserCurrency: (state, action) => {
      state.data.currency = action.payload;
    }
  }
});

export const { setUser, setUserLocale, setUserCurrency } = appSlice.actions;

export default appSlice.reducer;

export const types = {
  GET_USER: 'GET_USER'
};

const getUserState = state => state.user.data

export const getUserLocale = state => getUserState(state).locale;
export const getUserCurrency = state => getUserState(state).currency;
export const getUserDate = state => getUserState(state).date;

