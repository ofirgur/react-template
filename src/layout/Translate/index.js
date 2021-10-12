import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Krembo from './Krembo';
import changeLocale from '../../helpers/changeLocale';

const Index = () => {
    const [locale, setLocale] = useState('fr'); 
    const dispatch = useDispatch();
    
    const onClick = () => {
        changeLocale(dispatch ,locale);
        setLocale(locale === 'en' ? 'de-DE' : 'en');
    };

    return (
        <div>
            <Krembo />
            <button onClick={onClick}>Change locale</button>
        </div>
    );
};

export default Index;