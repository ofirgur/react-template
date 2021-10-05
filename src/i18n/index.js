import namespaces from './namespaces';

class i18n {
    constructor() {
        this.initialize = this.initialize.bind(this);
        this.locale = 'en';
    }

    initialize(locale) {
        this.locale = locale;
    };

    translateFrom(namespace) {
        return key => {
            return namespaces[namespace]
                    .resources[this.locale][key];
        };
    };
}

export default new i18n();



