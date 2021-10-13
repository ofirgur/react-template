import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { getUserLocale } from '../slice';
import i18n from '../../i18n';

const useTranslate = namespace => {
    const locale = useSelector(getUserLocale);

    const t = useCallback(
        i18n.translateFrom(namespace)(locale),
        [locale],
    );

    return t;
}

export default useTranslate;