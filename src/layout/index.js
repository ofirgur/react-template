import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';

import { setCurrentRoute } from '../siteMap/slice'; 
import ModulesContainer from './modulesContainer';

const Layout = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    console.log('location: ', location)

    useEffect(() => {
      dispatch(setCurrentRoute(location));
    }, [location]);

    return (
      <ModulesContainer />
    );
};

export default Layout;