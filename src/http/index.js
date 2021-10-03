import axios from 'axios';

import { setFetching } from '../http/slice';

export const createApiAction = agent => {
    return async dispatch => {
        const { method, type, url, data, actions, errors, mock } = agent;

        try {
            dispatch(setFetching({ type}));

            const response = (
                mock?.enable 
                ? await mockDelay(mock)
                : await axios({
                    method,
                    url,
                    data
                })
            );

            dispatch(setFetching({ type, reset: true }));

            if(response.status === 200) {
                actions && actions.forEach(action => {
                    dispatch(action(response.data));
                }); 
            } else {
                errors && errors.forEach(error => {
                    dispatch(error(response));
                });
            } 
        }
        catch (error) {
            // http request was failed
            // go to 501 page with error
            dispatch(setFetching(null));
            console.log('http error: ', error);
        }
    };
};

const mockDelay = mock => {
    const { delay, response } = mock;

    return new Promise(resolve => {
        setTimeout(resolve, delay || 0);
    }).then(() => response);
};
