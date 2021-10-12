class User {
    constructor() {
        this.onSuccess = this.onSuccess.bind(this);
        this.setLocale = this.setLocale.bind(this);
        this.setCurrency = this.setCurrency.bind(this);

        this.locale = 'en';
        this.currency = 'USD';
    }

    onSuccess(payload) {
        this.locale = payload.locale;
        this.currency = payload.currency;
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

  