import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom';

import { createApiAction } from "../http";

const Layout = () => {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(createApiAction({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/users',
        data: {}
      }));
    })

    return (
        <Switch>
          <Route exact path="/" component={() => (<div><h1>App Layout</h1><Link to="/example">link to /example</Link></div>)} />
          <Route path="/example" component={() => (<div><h1>Examle</h1><Link to="/">back to /</Link></div>)} />
        </Switch>
      );
};

export default Layout;