import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUsers } from '../app/slice';
import { isFetching } from '../http/slice';

import Layout from '../layout';

const App = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(isFetching('GET_USER'))

    useEffect(() => {
      dispatch(getUsers());
    }, []);

    return (
      isLoading
      ? <div>Loading...</div>
      : <Layout />
    );
};

export default App;