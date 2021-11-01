import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';

import { useTranslate } from '../../../intl/i18n/hooks';
import modules from '../modules';

//import Localization from '../../Localization';
const Localization = React.lazy(() => import('../../Localization'));

const OffersIndex = () => {
    const t = useTranslate('app');

    return (
      <div>
        <div>Offers Index</div>
        <br />
        {
          modules.map(m => (
            <Link key={m.key} to={m.pathname}>{t(m.title)}</Link>
          ))
        }
        <br />
        <Suspense fallback={<div>Splitting...</div>}>
          <Localization />
        </Suspense>
      </div>
    );
};

export default OffersIndex;