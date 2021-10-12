import React from 'react';

import useTranslate from '../../hooks/useTranslate';
import useFormat from '../../hooks/useFormat';
import user from '../../user';

const Krembo = () => {
    const t = useTranslate('app');

    const number = 123456.789;
    const format = useFormat(number);
    

    return (
        <div>
            <div>user locale: {user.locale}</div>
            <p>{t('HelloWorld.Text')} is hello world</p>
            <p>useFormat: {format}</p>

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