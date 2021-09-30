import { connectRouter } from 'connected-react-router';

const createRootReducer = history => ({
    router: connectRouter(history)
});

export default createRootReducer;
