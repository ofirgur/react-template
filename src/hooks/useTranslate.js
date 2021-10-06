import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import i18n from '../i18n';

const useTranslate = namespace => {
    const locale = useSelector(state => state.app.user.locale);
    const t = useCallback(
        key => i18n.translateFrom(namespace)(key),
        [locale],
    );

    return t;
}

export default useTranslate;