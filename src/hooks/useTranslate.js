import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { getUserLocale } from '../app/slice';
import i18n from '../i18n';

const useTranslate = namespace => {
    const locale = useSelector(getUserLocale);
    const t = useCallback(
        key => i18n.translateFrom(namespace)(key),
        [locale],
    );

    return t;
}

export default useTranslate;