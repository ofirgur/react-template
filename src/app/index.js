import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUsers } from '../app/slice';
import { isFetching } from '../http/slice';

import Layout from '../layout';

const App = () => {
    const dispatch = useDispatch();
    const ready = useSelector(isFetching('GET_USER'))

    useEffect(() => {
      dispatch(getUsers());
    }, []);

    return (
      ready
      ? <div>Loading...</div>
      : <Layout />
    );
};

export default App;