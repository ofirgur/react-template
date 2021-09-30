import { connectRouter } from 'connected-react-router';
import appSlice from '../../app/appSlice';

const createRootReducer = history => ({
    router: connectRouter(history),
    app: appSlice
});

export default createRootReducer;
