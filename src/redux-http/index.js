import axios from 'axios';

import { setLoading } from './slice';

export const createApiAction = agent => {
    return async dispatch => {
        const { method, type, url, data, actions, errors, onSuccess, onFailure, mock } = agent;

        try {
            dispatch(setLoading({ type }));

            const response = (
                mock?.enable
                ? await mockDelay(mock)
                : await axios({
                    method,
                    url,
                    data
                })
            );

            const { status, data } = response;
            if(status === 200) {
                actions && actions.forEach(action => {
                    dispatch(action(data));
                }); 

                onSuccess && onSuccess(data);
            } else {
                // errors && errors.forEach(error => {
                //     dispatch(error(data));
                // });

                // onFailure && onFailure(data);
            } 

            dispatch(setLoading({ type, reset: true }));
        }
        catch (error) {
            onFailure && onFailure(error);
            dispatch(setLoading({ type, reset: true }));
        }
    };
};

const mockDelay = mock => {
    const { delay, response } = mock;

    return new Promise(resolve => {
        setTimeout(resolve, delay || 0);
    }).then(() => response);
};
