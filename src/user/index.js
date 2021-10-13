import i18n from '../i18n';
import l10n from '../l10n';
import { store } from '../redux/store';
import { setUserLocale, setUserCurrency } from '../user/slice';

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
    }

    setLocale(locale) {
        const { dispatch } = store;
        
        this.locale = locale;
        dispatch(setUserLocale(this.locale));
        i18n.setLocale(this.locale);
        l10n.setLocale(this.locale);
    }

    setCurrency(currency) {
        const { dispatch } = store;

        this.currency = currency;
        dispatch(setUserCurrency(this.currency));
        l10n.setCurrency(this.currency);
    }
}

const user = new User();

export default user;

  