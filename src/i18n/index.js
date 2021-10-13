import namespaces from './namespaces';

class i18n {
    constructor() {
        this.translateFrom = this.translateFrom.bind(this);
    }

    translateFrom(namespace) {
        return locale => key => {
            const resources = namespaces[namespace]?.resources[locale];

            return resources ? resources[key] : '';
        };
    };
}

export default new i18n();



