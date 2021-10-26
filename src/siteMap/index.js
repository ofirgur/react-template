import offersChildRoutes from './childRoutes/offersChildRoutes';

const siteMap = {
    key: 'Home',
    name: 'home',
    pathname: '/',
    title: 'Home.Text',
    icon: '',
    childRoutes: [
        {
            key: 'MyHoldings', 
            name: 'myholdings',
            pathname: '/myholdings',
            title: 'MyHoldings.Text',
            icon: '',
            childRoutes: [{}]
        },
        {
            key: 'Offers', 
            name: 'offers',
            pathname: '/offers',
            title: 'Offers.Text',
            icon: '',
            childRoutes: offersChildRoutes
        },
        {
            key: 'Activity', 
            name: 'activity',
            pathname: '/activity',
            title: 'Activity.Text',
            icon: '',
            childRoutes: [{}]
        }
    ]
};

export default siteMap;

export const modulesRoutes = {};

const insert = t => {
    if(!t) return;

    const { name } = t;
    if(!name) return;

    modulesRoutes[name] = t;
};

const buildModulesRoutes = tree => {
    insert(tree);

    let { childRoutes } = tree;
    if(!childRoutes) return;

    childRoutes.forEach(child => buildModulesRoutes(child));
    childRoutes = undefined;
};

buildModulesRoutes(siteMap);


