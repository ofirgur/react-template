class i18n {
    constructor() {
        this.initialize = this.initialize.bind(this);
        this.locale = 'en';
        this.namespaces = {};
    }

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



