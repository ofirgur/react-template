import { useLocation } from 'react-router-dom'; 
import { useSelector } from 'react-redux';

import { getUserDeeplinks } from '../../user/slice';
import { getDeeplink } from '../../siteMap/slice'; 

export const useDeeplink = () => {
    const location  = useLocation();
    const deeplinks = useSelector(getUserDeeplinks);
    const deeplink = useSelector(state => getDeeplink(state)(deeplinks, location));

    return deeplink;
}