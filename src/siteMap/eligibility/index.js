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

export const setEligibleRoutes = eligibility => routes => {
    if(!routes) return;
    
    const { childRoutes } = routes;
    if(!childRoutes) return;

    const eRoutes = {
        ...routes,
        childRoutes: childRoutes
            .map(mapToEligibleChildRoutes(eligibility))
            .filter(filterByEligibleChildRoutes(eligibility))
    };
    
    return normalizeRoutesTree(eRoutes);
};
