import React from 'react';

import useTranslate from '../../hooks/useTranslate';
//import i18n from '../../i18n';
//const t = i18n.translateFrom('app');

const Krembo = () => {
    const t = useTranslate('app');

    return (
        <div>
            <p>{t('HelloWorld.Text')}</p>
        </div>
    );
};

export default React.memo(Krembo);
//export default Krembo;