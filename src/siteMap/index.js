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
            childRoutes: []
        },
        {
            key: 'Offers', 
            name: 'offers',
            pathname: '/offers',
            title: 'Offers.Text',
            icon: '',
            childRoutes: []
        }
    ]
};

export default siteMap;

export const modulesRoutes = {};

(tree => {
    const insert = t => {
        if(t) modulesRoutes[t.name] = tree;
    };
    
    insert(tree);

    const { childRoutes } = tree;
    if(!childRoutes) return;

    childRoutes.forEach(child => insert(child));
})(siteMap);

//console.log('modulesRoutes: ', modulesRoutes)


