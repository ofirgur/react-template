import { LOCALES } from '../locales';

class i18n {
    constructor() {
        this.getLocale = this.getLocale.bind(this);
        this.setLocale = this.setLocale.bind(this);
        this.loadNamespace = this.loadNamespace.bind(this);
        this.loadResource = this.loadResources.bind(this);
        this.initialize = this.initialize.bind(this);
        this.translateFrom = this.translateFrom.bind(this);

        this.locale = this.locale = LOCALES.en;
        this.namespaces = {};
    }

    getLocale() {
        return this.locale;
    }

    setLocale(locale) {
        this.locale = locale;
    }

    loadNamespace(name, namespace) {
        this.namespaces = {
            ...this.namespaces,
            [name]: namespace
        };
    };

    loadResources(name, resources) {
        this.namespaces[name] = {
            ...this.namespaces[name],
            resources
        };
    };

    initialize(namespaces, locale) {
        this.namespaces = namespaces;
        this.locale = locale;
    };

    translateFrom(namespace) {
        return key => {
            const resources = this.namespaces[namespace]?.resources[this.locale];

            return resources ? resources[key] : '';
        };
    };
}

export default new i18n();



