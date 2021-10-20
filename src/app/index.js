import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';

import { getUser } from '../user/http';
import { types } from '../user/slice';
import { isLoading } from '../redux-http/slice';
import { setCurrentRoute } from '../siteMap/slice'; 

import Layout from '../layout';

const App = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const loading = useSelector(isLoading(types.GET_USER));

    useEffect(() => {
      dispatch(getUser());
    }, []);

    useEffect(() => {
      dispatch(setCurrentRoute(location));
    }, [location]);

    return (
      loading
      ? <div>Loading...</div>
      : <Layout />
    );
};

export default App;