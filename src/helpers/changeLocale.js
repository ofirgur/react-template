import { setUserLocale } from '../app/slice';
import i18n from '../i18n';

export default (dispatch, locale) => {
    i18n.setLocale(locale);
    dispatch(setUserLocale(locale));
};