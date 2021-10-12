import { setUserLocale } from '../app/slice';
import i18n from '../i18n';
import l10n from '../l10n';
import user from '../user';

export default (dispatch, locale) => {
    dispatch(setUserLocale(locale));

    i18n.setLocale(locale);
    l10n.setLocale(locale);
    user.setLocale(locale);
};