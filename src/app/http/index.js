import { createApiAction } from '../../redux-http';
import { setUser, types } from '../slice';

export const getUser = (onSussess, onFailure) => {
    return createApiAction({
        method: 'GET',
        type: types.GET_USER,
        url: 'https://jsonplaceholder.typicode.com/users',
        data: {},
        actions: [setUser],
        // errors: [],
        onSuccess: onSussess,
        onFailure: onFailure,
        mock: {
          enable: __USE_MOCK__,
          delay: 3000,
          response: {
            status: 200,
            data: {
              locale: 'en',
              currency: 'USD'
            }
          }
        }
    });
};
