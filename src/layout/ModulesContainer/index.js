import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { modulesRoutes } from '../../siteMap';
import Home from '../../navigations/Home';
import MyHoldings from '../../navigations/MyHoldings';
import Offers from '../../navigations/Offers';
import Activity from '../../navigations/Activity';

const { home, myholdings, offers, activity } = modulesRoutes;

const ModulesContainer = () => {
    return (
      <Switch>
        <Route exact path={home.pathname} component={Home} />
        <Route path={myholdings.pathname} component={MyHoldings} />
        <Route path={offers.pathname} component={Offers} />
        <Route path={activity.pathname} component={Activity} />
      </Switch>
    );
};

export default ModulesContainer;