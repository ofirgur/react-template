import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Krembo from './Krembo';
import changeLocale from '../../helpers/changeLocale';

const Index = () => {
    const [locale, setLocale] = useState('ja-JP'); 
    const dispatch = useDispatch();
    
    const onClick = () => {
        changeLocale(dispatch ,locale);
        setLocale(locale === 'ja-JP' ? 'de-DE' : 'ja-JP');
    };

    return (
        <div>
            <Krembo />
            <button onClick={onClick}>Change locale (de - ja)</button>
        </div>
    );
};

export default Index;