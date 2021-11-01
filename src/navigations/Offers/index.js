import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LazyRoute from '../../conponents/LazyRoute';
import { modulesRoutes } from '../../siteMap';
import OffersIndex from './OffersIndex';

const { offers, template } = modulesRoutes;

const Offers = () => {
    return (
      <Switch>
        <Route exact path={offers.pathname} component={OffersIndex} />
        <LazyRoute 
          path={template.pathname}
          component={{
            promise: () => import('../../modules/template')
          }}
          reducer={{
            name: 'template',
            promise: () => import('../../modules/template/slice')
          }}
        />
      </Switch>
    );
};

export default Offers;