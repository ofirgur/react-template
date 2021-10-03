import axios from 'axios';

export const createApiAction = agent => {
    return async dispatch => {
        const { method, url, data, actions, errors, mock } = agent;

        try {
            const response = (
                mock?.enable 
                ? mock.response
                : await axios({
                    method,
                    url,
                    data
                })
            );

            setTimeout(() => {
                if(response.status === 200) {
                    actions.forEach(action => {
                        dispatch(action(response.data));
                    }); 
                } else {
                    errors.forEach(error => {
                        dispatch(error(response));
                    });
                }
            }, mock?.delay || 0);         
        }
        catch (error) {
            // http request was failed
            // go to 501 page with error
            console.log('http error: ', error);
        }
    };
};

const getMethod = method => {
    switch(method.toLowerCase()) {
        case 'get': return 'onGet';
        case 'post': return 'onPost';
        case 'put': return 'onPut';
        case 'delete': return 'onDelete';
    }
};