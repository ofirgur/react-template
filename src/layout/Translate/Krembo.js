import React from 'react';

import { useTranslate } from '../../i18n/hooks';
import { useNumberFormat } from '../../l10n/hooks';

const Krembo = () => {
    const t = useTranslate('app');
    const f = useNumberFormat({});
    const number = 123456.789;
    

    return (
        <div>
            {/* <div>user locale: {user.locale}</div>
            <div>user currency: {user.currency}</div> */}
            <p>{t('HelloWorld.Text')} is hello world</p>
            <p>useNumberFormat: {f(number)}</p>

            <p>number: {number}</p>
            <p>locale: de-DE</p>
            <p>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(number)}</p>
            <p>locale: ja-JP</p>
            <p>{new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(number)}</p>
        </div>
    );
};

export default React.memo(Krembo);
//export default Krembo;