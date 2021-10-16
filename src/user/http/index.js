import { createApiAction } from '../../redux-http';
import { setUser, types } from '../slice';
import mock from './mock/getUserMock.json';

export const getUser = () => {
    return createApiAction({
        method: 'GET',
        type: types.GET_USER,
        url: 'https://jsonplaceholder.typicode.com/users',
        data: {},
        actions: [setUser],
        errors: [],
        onSuccess: res => {},
        onFailure: err => {},
        mock: {
          enable: __USE_MOCK__,
          delay: 300,
          response: {
            status: 200,
            data: mock
          }
        }
    });
};
