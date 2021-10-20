import { routerMiddleware } from 'connected-react-router';

const createRootMiddleware = history => ([
    routerMiddleware(history)
]);

export default createRootMiddleware;