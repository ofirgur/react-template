import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUser } from './http';
import { types } from './slice';
import { isLoading } from '../http/slice';

import Layout from '../layout';

const App = () => {
    const dispatch = useDispatch();
    const loading = useSelector(isLoading(types.GET_USER))

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