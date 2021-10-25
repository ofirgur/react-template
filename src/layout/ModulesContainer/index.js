import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { modulesRoutes } from '../../siteMap';
import Home from '../Home';
import Localization from '../Localization';
import Template from '../../modules/template';

const { home, myholdings, offers, activity } = modulesRoutes;

const ModulesContainer = () => {
    return (
      <Switch>
        <Route exact path={home.pathname} component={Home} />
        <Route path={myholdings.pathname} component={Localization} />
        <Route path={offers.pathname} component={() => <div>Offers</div>} />
        <Route path={activity.pathname} component={() => <div>Activity</div>} />
        <Route path="/template" component={Template} />
      </Switch>
    );
};

export default ModulesContainer;