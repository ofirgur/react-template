import axios from 'axios';
 
export const createApiAction = agent => {
    return async dispatch => {
        const { method, url, data, action } = agent;

        try {
            const response = await axios({
                method,
                url,
                data
            });

            if(response.status === 200) {
                dispatch(action(response.data));
            }         
        }
        catch (error) {
            //http request was failed
            //console.log('error: ', error);
        }
    };
};