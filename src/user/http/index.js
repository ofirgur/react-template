import { createApiAction } from '../../redux-http';
import { setUser, types } from '../slice';

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
            data: {
              locale: 'ja-JP',
              currency: 'JPY',
              date: '2021-10-14T11:34:07.148Z'
            }
          }
        }
    });
};
