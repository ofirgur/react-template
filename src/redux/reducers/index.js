import { connectRouter } from 'connected-react-router';
import appSlice from '../../app/slice';
import userSlice from '../../user/slice';
import httpSlice from '../../redux-http/slice';

const createRootReducer = history => ({
    router: connectRouter(history),
    app: appSlice,
    user: userSlice,
    http: httpSlice
});

export default createRootReducer;
