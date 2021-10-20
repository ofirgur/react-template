import appSlice from '../../app/slice';
import userSlice from '../../user/slice';
import httpSlice from '../../redux-http/slice';
import siteMapSlice from '../../siteMap/slice';

const createRootReducer = () => ({
    app: appSlice,
    user: userSlice,
    http: httpSlice,
    siteMap: siteMapSlice
});

export default createRootReducer;
