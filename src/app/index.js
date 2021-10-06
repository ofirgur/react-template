import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUser } from './http';
import { types } from './slice';
import { isLoading } from '../redux-http/slice';
import user from '../user';
import i18n from '../i18n';
import namespaces from '../namespaces';

import Layout from '../layout';

const App = () => {
    const dispatch = useDispatch();
    const loading = useSelector(isLoading(types.GET_USER));

    useEffect(() => {
      dispatch(getUser(details => {
          user.onSuccess(details);
          i18n.initialize(namespaces, user.locale);
      }));
    }, []);

    return (
      loading
      ? <div>Loading...</div>
      : <Layout />
    );
};

export default App;