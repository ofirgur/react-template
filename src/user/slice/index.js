import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'user',
  initialState: {
    data: {}
  },
  reducers: {
    setUser: (state, action) => {
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

export const getUserState = state => state.user.data
export const getUserLocale = state => getUserState(state).locale;
export const getUserCurrency = state => getUserState(state).currency;
export const getUserDate = state => getUserState(state).date;
export const getUserDeeplinks = state => getUserState(state).deeplinks;

