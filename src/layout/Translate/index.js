import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setUserLocale } from '../../app/slice';
import Krembo from './Krembo';
import i18n from '../../i18n';

const Index = () => {
    const [locale, setLocale] = useState('fr'); 
    const dispatch = useDispatch();
    
    const onClick = () => {
        i18n.setLocale(locale);
        dispatch(setUserLocale(locale));
        setLocale(locale === 'en' ? 'fr' : 'en');
    };

    return (
        <div>
            <Krembo />
            <button onClick={onClick}>Change locale</button>
        </div>
    );
};

export default Index;