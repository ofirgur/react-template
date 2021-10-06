import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUser } from './http';
import { types } from './slice';
import { isLoading } from '../redux-http/slice';
import initSystem from '../helpers/initSystem';

import Layout from '../layout';

const App = () => {
    const dispatch = useDispatch();
    const loading = useSelector(isLoading(types.GET_USER));

    useEffect(() => {
      dispatch(getUser(initSystem));
    }, []);

    return (
      loading
      ? <div>Loading...</div>
      : <Layout />
    );
};

export default App;