import React from 'react';

import useTranslate from '../../hooks/useTranslate';
import useFormat from '../../hooks/useFormat';
//import i18n from '../../i18n';
//const t = i18n.translateFrom('app');

const Krembo = () => {
    const t = useTranslate('app');
    const format = useFormat(3000);

    return (
        <div>
            <p>{t('HelloWorld.Text')}</p>
            <p>{format}</p>
        </div>
    );
};

export default React.memo(Krembo);
//export default Krembo;