import { namespaces } from './namespaces';



class I18N {
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

const i18n = new I18N();
export default i18n;



