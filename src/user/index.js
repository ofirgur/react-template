class User {
    constructor() {
        this.onSuccess = this.onSuccess.bind(this);
    }

    onSuccess(payload) {
        this.locale = payload.locale;
    }
}

const user = new User();

export default user;

  