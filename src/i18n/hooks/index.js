import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { getUserLocale } from '../../user/slice';
import { translateFrom } from '../index';

export const useTranslate = namespace => {
    const locale = useSelector(getUserLocale);

    const t = useCallback(
        translateFrom(namespace)(locale),
        [locale],
    );

    return t;
};
