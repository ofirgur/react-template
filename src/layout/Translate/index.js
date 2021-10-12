import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Krembo from './Krembo';
import changeLocale from '../../helpers/changeLocale';
import changeCurrency from '../../helpers/changeCurrency';

const Index = () => {
    const [locale, setLocale] = useState({ locale: 'ja-JP', currency: 'JPY'}); 
    const dispatch = useDispatch();
    
    const onClick = () => {
        changeLocale(dispatch ,locale.locale);
        changeCurrency(locale.currency);
        setLocale({ locale: locale.locale === 'ja-JP' ? 'de-DE' : 'ja-JP', currency: locale.locale === 'ja-JP' ? 'EUR' : 'JPY' });
    };

    return (
        <div>
            <Krembo />
            <button onClick={onClick}>Change locale (de - ja)</button>
        </div>
    );
};

export default Index;