import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import i18n from '../i18n';
const t = i18n.translateFrom('app');

const Layout = () => {
    console.log('locale: ', i18n.locale);
    console.log('translate: ', t('HelloWorld.Text'));
    
    return (
        <Switch>
          <Route exact path="/" component={() => (<div><h1>App Layout</h1><Link to="/example">link to /example</Link></div>)} />
          <Route path="/example" component={() => (<div><h1>Examle</h1><Link to="/">back to /</Link></div>)} />
        </Switch>
      );
};

export default Layout;