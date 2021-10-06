import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import Translate from './Translate';

const Layout = () => {
    return (
      <Switch>
        <Route exact path="/" component={() => (<div><h1>App Layout</h1><Link to="/example">link to /example</Link></div>)} />
        <Route path="/example" component={Translate} />
      </Switch>
    );
};

export default Layout;