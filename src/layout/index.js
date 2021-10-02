import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

const Layout = () => {
    return (
        <Switch>
          <Route exact path="/" component={() => (<div><h1>App Layout</h1><Link to="/example">link to /example</Link></div>)} />
          <Route path="/example" component={() => (<div><h1>Examle</h1><Link to="/">back to /</Link></div>)} />
        </Switch>
      );
};

export default Layout;