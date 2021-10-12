class User {
    constructor() {
        this.onSuccess = this.onSuccess.bind(this);
        this.locale = 'en';
        this.currency = 'USD';
    }

    onSuccess(payload) {
        this.locale = payload.locale;
        this.currency = payload.currency;
    }
}

const user = new User();

export default user;

  