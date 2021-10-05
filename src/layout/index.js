import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom';

import { setLocale } from '../app/slice';

import i18n from '../i18n';
const t = i18n.translateFrom('app');

const Layout = () => {
    const dispatch = useDispatch();
    console.log('locale: ', i18n.locale);
    console.log('translate: ', t('HelloWorld.Text'));
    //i18n.setLocale('en');
    console.log('locale: ', i18n.locale);
    console.log('translate: ', t('HelloWorld.Text'));

    useEffect(() => {

    });

    const onClick = () => {
      i18n.setLocale('en');
      console.log('locale: ', i18n.locale);
      dispatch(setLocale());
      console.log('setLocale')
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