import { routerMiddleware } from 'connected-react-router';
import logger from 'redux-logger';

const createRootMiddleware = history => ([
    routerMiddleware(history),
    logger
]);

export default createRootMiddleware;