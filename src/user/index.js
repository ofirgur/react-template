import i18n from '../i18n';
import l10n from '../l10n';
import { store } from '../redux/store';
import { setUserLocale, setUserCurrency } from '../user/slice';

class User {
    constructor() {
        this.onSuccess = this.onSuccess.bind(this);
        this.onFailure = this.onFailure.bind(this);
        this.setLocale = this.setLocale.bind(this);
        this.setCurrency = this.setCurrency.bind(this);

        this.locale = 'en';
        this.currency = 'USD';
    }

    onSuccess(payload) {
        this.locale = payload.locale;
        this.currency = payload.currency;
    }

    onFailure(error) {
        console.log('Error: ', error);   
    }

    setLocale(locale) {
        const { dispatch } = store;
        
        this.locale = locale;
        dispatch(setUserLocale(this.locale));
    }

    setCurrency(currency) {
        const { dispatch } = store;

        this.currency = currency;
        dispatch(setUserCurrency(this.currency));
    }

    translateFrom(namespace) {
        return i18n.translateFrom(namespace)(this.locale);
    }

    numberFormat(number) {
        return l10n.numberFormat(number)(this.locale);
    }

    numberFormatWithCurrency(number) {
        return l10n.numberFormatWithCurrency(number)(this.locale, this.currency);
    }
}

const user = new User();

export default user;

  