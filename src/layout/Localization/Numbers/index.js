import React from 'react';
import { useSelector } from 'react-redux';

import { useTranslate } from '../../../localization/i18n/hooks';
import { useNumberFormat } from '../../../localization/l10n/hooks';
import { getUserLocale, getUserCurrency } from '../../../user/slice';

const Numbers = () => {
    const t = useTranslate('app');
    const f = useNumberFormat({ currency: true });
    const locale = useSelector(getUserLocale);
    const currency = useSelector(getUserCurrency);

    const number = 123456.789;
    

    return (
        <div>
            <h2>user locale: {locale}</h2>
            <h2>user currency: {currency}</h2>
            <hr />

            <h4>useTranslate base on locale</h4>
            <h4>{t('HelloWorld.Text')} (hello world)</h4>

            <h4>number: {number}</h4>
            <h4>useNumberFormat base on locale</h4>
            <h4>{f(number)}</h4>

            <p>locale: de-DE</p>
            <p>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(number)}</p>
            <p>locale: ja-JP</p>
            <p>{new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(number)}</p>
        </div>
    );
};

export default React.memo(Numbers);
//export default Krembo;