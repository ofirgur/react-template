import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { createApiAction } from "../http";

import Layout from '../layout';

const App = () => {
  const dispatch = useDispatch();

    useEffect(() => {
      dispatch(createApiAction({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/users',
        data: {}
      }));
    }, []);

    return (
      <Layout />
    );
};

export default App;