import React from 'react';
import { Link, Redirect } from 'react-router-dom'; 

import { modulesRoutes } from '../../siteMap';
import { useDeeplink } from '../../siteMap/hooks';

const { myholdings, offers, activity } = modulesRoutes;

const Home = () => {
    const deeplink = useDeeplink();
    if(deeplink) 
        return <Redirect to={deeplink.pathname} />

    return (
        <div>
            <h1>App Layout</h1>
            <div><Link to={myholdings.pathname}>link to /myholdings</Link></div>
            <div><Link to={offers.pathname}>link to /offers</Link></div>
            <div><Link to={activity.pathname}>link to /activity</Link></div>
        </div>
    );
};

export default Home;