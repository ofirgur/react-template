import namespaces from './namespaces';

class i18n {
    constructor() {
        this.initialize = this.initialize.bind(this);
        this.translateFrom = this.translateFrom.bind(this);

        this.getLocale = this.getLocale.bind(this);
        this.setLocale = this.setLocale.bind(this);

        this.locale = this.locale = 'en';
        this.namespaces = namespaces;
    }

    initialize(locale) {
        this.locale = locale;
    };

    translateFrom(namespace) {
        return locale => key => {
            const resources = this.namespaces[namespace]?.resources[locale];

            return resources ? resources[key] : '';
        };
    };

    getLocale() {
        return this.locale;
    };

    setLocale(locale) {
        this.locale = locale;
    };
}

export default new i18n();



