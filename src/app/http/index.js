import { createApiAction } from '../../redux-http';
import { initialize, types } from '../slice';
import user from '../../user';
import i18n from '../../i18n';
import namespaces from '../../namespaces';

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
        // onFailure: error => {},
        mock: {
          enable: __USE_MOCK__,
          delay: 3000,
          response: {
            status: 200,
            data: {
              locale: 'fr'
            }
          }
        }
    });
};
