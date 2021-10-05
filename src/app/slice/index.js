import { createSlice } from '@reduxjs/toolkit';
import { LOCATION_CHANGE } from 'connected-react-router';

import { createApiAction } from "../../http";
import user from '../../user';
import i18n from '../../i18n';
import namespaces from '../../namespaces';

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

/** action creators */

export const types = {
  GET_USER: 'GET_USER'
}

export const getUser = () => {
  return createApiAction({
      method: 'GET',
      type: types.GET_USER,
      url: 'https://jsonplaceholder.typicode.com/users',
      data: {},
      actions: [initialize],
      // errors: [],
      onSuccess: payload => {
        user.onSuccess(payload);
        console.log('locale: ', user?.locale);
        i18n.initialize(namespaces, user?.locale || 'en');
      },
      // onFailure: error => {

      // },
      mock: {
        enable: __USE_MOCK__,
        delay: 3000,
        response: {
          status: 200,
          data: {
            locale: 'en'
          }
        }
      }
  });
};