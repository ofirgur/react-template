import { searchRoute } from '../eligibility';

export const isDeeplink = deeplink => {
    if (!deeplink) return;

    switch (typeof deeplink) {
        case 'string':
            return /[?|&]action=/.test(deeplink);
        case 'object':
            return deeplink.search && /[?|&]action=/.test(deeplink.search);
        default: 
            return;
    }
};

export const getQueryFromSearch = search => {
    if(!search || typeof search !== 'string') return;
    const queryString = {};

    search
        .slice(1)
        .split('&')
        .forEach(q => {
            const a = q.split('=');
            
            queryString[a[0]] = a[1];
        });

    return queryString;
};

export const handleDeeplink = routes => (deeplinks, location) => {
    if(!deeplinks || !isDeeplink(location)) return;

    const { search } = location;
    const queryString = getQueryFromSearch(search);
    if(!queryString) return;

    const { action } = queryString;
    if(!action) return;

    const deeplink = deeplinks[action];
    if(!deeplink) return;

    const { key } = deeplink;
    return searchRoute(routes, { key: 'key', value: key });
};



