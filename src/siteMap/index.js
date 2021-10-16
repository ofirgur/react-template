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
const buildModulesRoutes = routes => {
  if(!routes) return;

  modulesRoutes[routes.name] = {
    ...routes,
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
console.log(modulesRoutes)


