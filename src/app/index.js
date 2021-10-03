import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUsers, types } from '../app/slice';
import { isFetching } from '../http/slice';

import Layout from '../layout';

const App = () => {
    const dispatch = useDispatch();
    const loading = useSelector(isFetching(types.GET_USER))

    useEffect(() => {
      dispatch(getUsers());
    }, []);

    return (
      loading
      ? <div>Loading...</div>
      : <Layout />
    );
};

export default App;