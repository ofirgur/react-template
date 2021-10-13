import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setUserLocale, setUserCurrency } from '../../user/slice';

import Krembo from './Krembo';

const Index = () => {
    const dispatch = useDispatch();
    const [locale, setLocale] = useState({ l: 'ja-JP', c: 'JPY'}); 
    
    const onClick = () => {
        const l = locale.l === 'ja-JP' ? 'de-DE' : 'ja-JP';
        const c = locale.l === 'ja-JP' ? 'EUR' : 'JPY'
        
        setLocale({ l , c });
        dispatch(setUserLocale(l));
        dispatch(setUserCurrency(c));
    };

    return (
        <div>
            <Krembo />
            <button onClick={onClick}>Change locale (de - ja)</button>
        </div>
    );
};

export default Index;