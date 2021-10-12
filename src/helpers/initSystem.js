import user from '../user';
import i18n from '../i18n';
import l10n from '../l10n';
import namespaces from '../namespaces';

export default data => {
    user.onSuccess(data);
    i18n.initialize(namespaces, user.locale);
    l10n.initialize(user.locale, user.currency);
};