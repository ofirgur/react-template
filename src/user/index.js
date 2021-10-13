import i18n from '../i18n';
import l10n from '../l10n';
import { store } from '../redux/store';

class User {
    constructor() {
        this.onSuccess = this.onSuccess.bind(this);
        this.onFailure = this.onFailure.bind(this);
        this.initSystem = this.initSystem.bind(this);
        this.setLocale = this.setLocale.bind(this);
        this.setCurrency = this.setCurrency.bind(this);

        this.locale = 'en';
        this.currency = 'USD';
    }

    onSuccess(payload) {
        console.log('payload: ', payload)
        this.locale = payload.locale;
        this.currency = payload.currency;

        this.initSystem();
    }

    onFailure(error) {
        console.log('Error: ', error);   
    }

    initSystem() {
        i18n.initialize(this.locale);
        l10n.initialize(this.locale, this.currency);
        //store.dispatch();
    }

    setLocale(locale) {
        this.locale = locale;
    }

    setCurrency(currency) {
        this.currency = currency;
    }
}

const user = new User();

export default user;

  