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

const siteMapCollection = {};
const buildModulesRoutes = routes => {
  if(!routes) return;

  siteMapCollection[routes.name] = {
    ...routes,
    path: routes.pathname,
    childRoutes: undefined
  };

  const { childRoutes } = routes;
  if(childRoutes) {
    for(let i = 0; i < childRoutes.length; i++) {
      buildModulesRoutes(childRoutes[i]);
    }
  }
};

buildModulesRoutes(siteMap);
export const modulesRoutes = siteMapCollection;

