import appSlice from '../../app/slice';
import userSlice from '../../user/slice';
import httpSlice from '../../redux-http/slice';
import siteMapSlice from '../../siteMap/slice';
import templateSlice from '../../modules/template/slice';

const createRootReducer = () => ({
    app: appSlice,
    user: userSlice,
    http: httpSlice,
    siteMap: siteMapSlice,
    template: templateSlice
});

export default createRootReducer;
