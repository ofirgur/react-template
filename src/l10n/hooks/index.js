import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { getUserLocale } from '../../user/slice';
import { numberFormat } from '../index';

export const useNumberFormat = options => {
    const locale = useSelector(getUserLocale);

    const f = useCallback(
        numberFormat(options)(locale),
        [locale],
    );

    return f;
};

