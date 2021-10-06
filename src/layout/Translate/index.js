import React from 'react';

import i18n from '../../i18n';
const t = i18n.translateFrom('app');

const Translate = () => {
    console.log('i18n.locale: ', i18n.locale)

    const onClick = () => {
        i18n.setLocale('fr');
        console.log('i18n.setLocale(fr): ', i18n.locale);
        console.log('i18n.locale: ', i18n.locale);
    };

    return (
        <div>
            <p>{t('HelloWorld.Text')}</p>
            <button onClick={onClick}>Change locale</button>
        </div>
    );
};

export default Translate;