export const isEligibleModule = eligibility => module => {
    if(!eligibility || !module) return;

    const { isStatic, key } = module;

    return isStatic || eligibility[key];
};

export const mapToEligibleChildRoutes = eligibility => route => {
    if(!route) return;

    const { childRoutes } = route;
    if(!childRoutes) return route;

    return {                        
        ...route,
        childRoutes: childRoutes.filter(isEligibleModule(eligibility))
    };
};

export const filterByEligibleChildRoutes = eligibility => route => {
    if(!route) return;
    
    const { childRoutes } = route;
    if(!childRoutes) return;

    return childRoutes.length > 0 || isEligibleModule(eligibility)(route);
};

export const buildBreadcrumbs = (route, parent) => {  
    if(!route) return;

    const breadcrumbs = { 
        pathname: route.pathname, 
        title: route.title 
    };

    if(!parent) return [breadcrumbs];

    return [...parent.breadcrumbs, breadcrumbs];
};

export const buildRouteDetails = (route, parent) => {
    if(!route) return;

    const breadcrumbs = buildBreadcrumbs(route, parent);

    return {
        ...route,
        breadcrumbs
    };
};

export const normalizeRoutesTree = (routes, parent) => {
    if(!routes) return;

    const route = {
        ...routes,
        ...buildRouteDetails(routes, parent)
    };

    const { childRoutes } = route;
    if(!childRoutes) return route;

    return {
        ...route,
        childRoutes: childRoutes.map(r => normalizeRoutesTree(r, route))
    };
};

export const buildEligibleRoutes = eligibility => routes => {
    if(!routes) return;
    
    const { childRoutes } = routes;
    if(!childRoutes) return routes;
    
    const eRoutes = {
        ...routes,
        childRoutes: childRoutes
            .map(mapToEligibleChildRoutes(eligibility))
            //.filter(filterByEligibleChildRoutes(eligibility))
    };
    
    return normalizeRoutesTree(eRoutes);
};

export const searchRoute = (routes, search) => {
    if(!routes || !find) return;

    const { key, value } = search;
    if(routes[key] === value) return routes;

    const { childRoutes } = routes;
    if(!childRoutes) return;

    let result;
    for(let i = 0; !result && i < childRoutes.length; i++) {
        result = searchRoute(childRoutes[i], search);
    }

    return result;
};

export const searchRouteFallback = (routes, pathname) => {
    const route = searchRoute(routes, { key: 'pathname', value: pathname });   
    if(route) return route;
    
    const pathArray = pathname.split('/');
    if(pathArray.length === 1) return;

    const parentPathname = pathArray.slice(0, pathArray.length - 1).join('/');
    return searchRouteFallback(routes, parentPathname);
};

