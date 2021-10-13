class l10n {
    constructor() {
        this.numberFormat = this.numberFormat.bind(this);
        this.numberFormatWithCurrency = this.numberFormatWithCurrency.bind(this);
    }

    numberFormat(number) {
        return locale => new Intl.NumberFormat(locale).format(number);
    }

    numberFormatWithCurrency(number) {
        return (locale, currency) => new Intl.NumberFormat(locale, { 
            style: 'currency', 
            currency: currency 
        }).format(number);
    }
};

export default new l10n;