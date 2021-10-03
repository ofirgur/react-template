import axios from 'axios';

export const createApiAction = agent => {
    return async dispatch => {
        const { method, url, data, actions, errors, mock } = agent;

        try {
            const response = (
                mock?.enable 
                ? await mockDelay(mock)
                : await axios({
                    method,
                    url,
                    data
                })
            );

            if(response.status === 200) {
                actions.forEach(action => {
                    dispatch(action(response.data));
                }); 
            } else {
                errors.forEach(error => {
                    dispatch(error(response));
                });
            }      
        }
        catch (error) {
            // http request was failed
            // go to 501 page with error
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
