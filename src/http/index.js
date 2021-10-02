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

            //const { data, status } = response; // { data, status, headers }
            dispatch(action(response));
            if(status === 200) {
                
            }         
        }
        catch (error) {
            //http request was failed
            //console.log('error: ', error);
        }
    };
};