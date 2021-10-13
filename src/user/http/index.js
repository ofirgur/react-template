import { createApiAction } from '../../redux-http';
import { setUser, types } from '../slice';
import user from '../index';

export const getUser = () => {
    return createApiAction({
        method: 'GET',
        type: types.GET_USER,
        url: 'https://jsonplaceholder.typicode.com/users',
        data: {},
        actions: [setUser],
        // errors: [],
        onSuccess: user.onSussess,
        onFailure: user.onFailure,
        mock: {
          enable: __USE_MOCK__,
          delay: 300,
          response: {
            status: 200,
            data: {
              locale: 'ja-JP',
              currency: 'JPY'
            }
          }
        }
    });
};
