class i18n {
    constructor() {
        this.initialize = this.initialize.bind(this);
        this.getLocale = this.getLocale.bind(this);
        this.setLocale = this.setLocale.bind(this);
        this.loadNamespace = this.loadNamespace.bind(this);
        this.loadResource = this.loadResource.bind(this);

        this.locale = 'en';
        this.namespaces = {};
    }

    getLocale() {
        return this.locale;
    }

    setLocale(locale) {
        this.locale = locale;
    }

    initialize(namespaces, locale) {
        this.namespaces = namespaces;
        this.locale = locale;
    };

    loadNamespace(name, namespace) {
        this.namespaces = {
            ...this.namespaces,
            [name]: namespace
        };
    };

    loadResource(name, resources) {
        this.namespaces[name] = {
            ...this.namespaces[name],
            resources
        };
    };

    translateFrom(namespace) {
        return key => {
            const resources = this.namespaces[namespace]?.resources[this.locale];

            return resources ? resources[key] : '';
        };
    };
}

export default new i18n();



