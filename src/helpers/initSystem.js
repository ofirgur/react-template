import user from '../user';
import i18n from '../i18n';
import l10n from '../l10n';

export default data => {
    user.onSuccess(data);
    i18n.initialize(user.locale);
    l10n.initialize(user.locale, user.currency);
};