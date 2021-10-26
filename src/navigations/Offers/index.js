import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { modulesRoutes } from '../../siteMap';
import OffersIndex from './OffersIndex';
import Template from '../../modules/template';

const { offers, template } = modulesRoutes;

const Offers = () => {
    return (
      <Switch>
        <Route exact path={offers.pathname} component={OffersIndex} />
        <Route path={template.pathname} component={Template} />
      </Switch>
    );
};

export default Offers;