import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom';

import i18n from '../i18n';

import Translate from './Translate';

const Layout = () => {
    const locale = useSelector(state => state.app.user.locale);
    console.log('state.app.user.locale: ', locale);
    i18n.setLocale(locale);
    console.log(`i18n.setLocale(${locale})`);
    console.log('i18n.locale: ', i18n.locale);
    
    useEffect(() => {
      // i18n.setLocale(locale);
      // console.log(`i18n.setLocale(${locale})`);
      // console.log('i18n.locale: ', i18n.locale);
    }, [locale]);

    return (
        <Switch>
          <Route exact path="/" component={() => (<div><h1>App Layout</h1><Link to="/example">link to /example</Link></div>)} />
          <Route path="/example" component={Translate} />
        </Switch>
    );
};

export default Layout;