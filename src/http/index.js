import axios from 'axios';
 
export const createApiAction = agent => {
    return async dispatch => {
        const { method, url, data, actions, errors } = agent;

        try {
            const response = await axios({
                method,
                url,
                data
            });

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
            //http request was failed
            // Go to 501 page with error
            console.log('http error: ', error);
        }
    };
};