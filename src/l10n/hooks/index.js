import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { getUserLocale, getUserCurrency } from '../../user/slice';
import { numberFormat, dateFormat } from '../index';

export const useNumberFormat = options => {
    const locale = useSelector(getUserLocale);
    const currency = useSelector(getUserCurrency);

    const getOptions = o => {
        if(!o) return;

        if(o.currency && typeof o.currency === 'boolean') {
            return {
                ...o,
                style: 'currency',
                currency
            };
        }; 

        return o;
    };

    const f = useCallback(
        numberFormat(getOptions(options))(locale),
        [locale],
    );

    return f;
};

export const useDateFormat = options => {
    const locale = useSelector(getUserLocale);

    const d = useCallback(
        dateFormat(options)(locale),
        [locale],
    );

    return d;
};

