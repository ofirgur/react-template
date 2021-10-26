import React from 'react';
import { Link } from 'react-router-dom';

import { useTranslate } from '../../../intl/i18n/hooks';
import modules from '../modules';

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
      </div>
    );
};

export default OffersIndex;