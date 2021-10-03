import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { initialize } from '../app/slice';
import { createApiAction } from "../http";

import Layout from '../layout';

const App = () => {
  const dispatch = useDispatch();

    useEffect(() => {
      dispatch(createApiAction({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/users',
        data: {},
        actions: [initialize],
        mock: {
          enable: true,
          delay: 3000,
          response: {
            status: 200,
            data: ['a', 'b']
          }
        }
      }));
    }, []);

    return (
      <Layout />
    );
};

export default App;