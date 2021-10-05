import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom';

import { setLocale, getLocale } from '../app/slice';

import i18n from '../i18n';
const t = i18n.translateFrom('app');

const Layout = () => {
    const dispatch = useDispatch();
    const locale = useSelector(getLocale);

    useEffect(() => {
      //i18n.setLocale(locale);
      console.log('state.locale: ', locale);
    }, [locale]);

    const onClick = () => {
      i18n.setLocale('en');
      console.log('i18n setLocale');
      console.log('i18n.locale: ', i18n.locale);
      dispatch(setLocale());
      console.log('state setLocale');
    };

    return (
      <>
        <Switch>
          <Route exact path="/" component={() => (<div><h1>App Layout</h1><Link to="/example">link to /example</Link></div>)} />
          <Route path="/example" component={() => (<div><h1>Examle</h1><Link to="/">back to /</Link></div>)} />
        </Switch>

        <p>{t('HelloWorld.Text')}</p>
        <button onClick={() => { i18n.setLocale('en'); }}>Change locale</button>
        <button onClick={onClick}>Change state</button>
      </>
    );
};

export default Layout;