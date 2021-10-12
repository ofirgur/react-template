class l10n {
    constructor() {
        this.initialize = this.initialize.bind(this);
        this.numberFormat = this.numberFormat.bind(this);
        this.setLocale = this.setLocale.bind(this);
        this.setCurrency = this.setCurrency.bind(this);

        this.locale = 'en'
        this.currency = 'USD'
    }

    initialize(locale, currency) {
        this.locale = locale;
        this.currency = currency;
    }

    numberFormat(number) {
        return new Intl.NumberFormat(this.locale, { 
                style: 'currency', 
                currency: this.currency 
            }).format(number);
    }

    setLocale(locale) {
        this.locale = locale;
    }

    setCurrency(currency) {
        this.currency = currency;
    }
};

export default new l10n;