import { routerMiddleware } from 'connected-react-router';
import siteMaoMiddleware from '../../siteMap/slice/middleware';

const createRootMiddleware = history => ([
    routerMiddleware(history),
    siteMaoMiddleware
]);

export default createRootMiddleware;