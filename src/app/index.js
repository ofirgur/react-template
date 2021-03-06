import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUser } from '../user/http';
import { types } from '../user/slice';
import { isLoading } from '../redux-http/slice';

import Layout from '../layout';

const App = () => {
    const dispatch = useDispatch();
    const loading = useSelector(isLoading(types.GET_USER));

    useEffect(() => {
      dispatch(getUser());
    }, []);

    return (
      loading
      ? <div>Loading...</div>
      : <Layout />
    );
};

export default App;