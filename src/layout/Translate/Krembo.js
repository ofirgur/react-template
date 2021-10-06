import React from 'react';

import i18n from '../../i18n';
const t = i18n.translateFrom('app');

const Krembo = () => {
    return (
        <div>
            <p>{t('HelloWorld.Text')}</p>
        </div>
    );
};

export default Krembo;