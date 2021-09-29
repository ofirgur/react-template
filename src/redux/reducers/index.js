import { connectRouter } from 'connected-react-router';

import counterReducer from '../../app/Counter/counterSlice';

const createRootReducer = history => ({
    router: connectRouter(history),
    counter: counterReducer
});

export default createRootReducer;
