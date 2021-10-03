import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUser, types } from '../app/slice';
import { isFetching } from '../http/slice';

import Layout from '../layout';

const App = () => {
    const dispatch = useDispatch();
    const loading = useSelector(isFetching(types.GET_USER))

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