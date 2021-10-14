import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import Localization from './Localization';

const Layout = () => {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/example" component={Localization} />
      </Switch>
    );
};

export default Layout;