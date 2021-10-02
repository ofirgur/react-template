import { connectRouter } from 'connected-react-router';
import appSlice from '../../app/slice';

const createRootReducer = history => ({
    router: connectRouter(history),
    app: appSlice
});

export default createRootReducer;
