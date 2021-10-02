import axios from 'axios';
 
export const createApiAction = agent => {
    const { method, url, data } = agent;

    return async dispatch => {
        // return axios({
        //     method,
        //     url,
        //     data
        // })
        // .then(response => {
        //     dispatch({ 
        //         type: 'BLABLA',
        //         response
        //     });
        // });
        try {
            const response = await axios({
                method,
                url,
                data
            });

            dispatch({ 
                type: 'BLABLA',
                response
            });
        }
        catch (error) {
            //http request was failed
            //console.log('error: ', error);
        }
        

    };
};