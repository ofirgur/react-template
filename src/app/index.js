import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import i18n from '../i18n';
import { getUser } from './http';
import { types, getLocale } from './slice';
import { isLoading } from '../redux-http/slice';

import Layout from '../layout';

const App = () => {
    const dispatch = useDispatch();
    const loading = useSelector(isLoading(types.GET_USER));
    const locale = useSelector(getLocale);
    //i18n.initialize(locale);

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