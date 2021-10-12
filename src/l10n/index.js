import { LOCALES } from '../locales';

class l10n {
    constructor() {
        this.initialize = this.initialize.bind(this);
        this.locale = LOCALES.en
        this.currency = 'USD'
    }

    initialize(locale, currency) {
        this.locale = locale;
        this.currency = currency;
    }

    numberFormat(number) {
        return new Intl.NumberFormat('de-DE', { style: 'currency', currency: this.currency }).format(number);
    }
};

export default new l10n;