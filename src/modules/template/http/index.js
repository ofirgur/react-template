import { createApiAction } from '../../../redux-http';
import { setData, types } from '../slice';
import mock from './mock/getDataMock.json';

export const fetchData = () => {
    return createApiAction({
        method: 'GET',
        type: types.FETCH_DATA,
        url: 'https://jsonplaceholder.typicode.com/users',
        data: {},
        actions: [setData],
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
