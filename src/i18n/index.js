import { namespaces } from './namespaces';

const translateFrom = namespace => {
    return key => {
        return namespaces[namespace]
                .resources['en'][key];
    };
};





