import user from '../user';
import i18n from '../i18n';
import namespaces from '../namespaces';

export default data => {
    user.onSuccess(data);
    i18n.initialize(namespaces, user.locale);
};