import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchData } from '../../http';
import { getData, types } from '../../slice';
import { isLoading } from '../../../../redux-http/slice';

import Index from '../Index';

const Outlet = () => {
    const dispatch = useDispatch();
    const loading = useSelector(isLoading(types.FETCH_DATA));

    useEffect(() => {
      dispatch(fetchData());
    }, []);

    return (
      loading
      ? <div>Loading...</div>
      : <Index />
    );
};

export default Outlet;