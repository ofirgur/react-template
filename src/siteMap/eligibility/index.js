export const isEligibleModule = eligibility => module => {
    if(!eligibility || !module) return;

    const { static, key } = module;

    return static || eligibility[key];
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
