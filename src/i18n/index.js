import namespaces from './namespaces';

export const translateFrom = namespace => locale => key => {
    const resources = namespaces[namespace]?.resources[locale];

    return resources ? resources[key] : '';
};




