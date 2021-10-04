import { namespaces } from './namespaces';

const translateFrom = namespace => {
    return key => {
        return namespaces[namespace]
                .resources['en'][key];
    };
};

class I18N {
    constructor() {
        this.initialize = this.initialize.bind(this);
    }

    initialize(locale) {
        this.locale = locale;
    };
}

const i18n = new I18N();
export default i18n;



