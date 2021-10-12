import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Krembo from './Krembo';
import changeLocale from '../../helpers/changeLocale';
import changeCurrency from '../../helpers/changeCurrency';

const Index = () => {
    const [locale, setLocale] = useState({ l: 'ja-JP', c: 'JPY'}); 
    const dispatch = useDispatch();
    
    const onClick = () => {
        const l = locale.l === 'ja-JP' ? 'de-DE' : 'ja-JP';
        const c = locale.l === 'ja-JP' ? 'EUR' : 'JPY'
        
        setLocale({ l , c });
        changeLocale(dispatch ,l);
        changeCurrency(c);
    };

    return (
        <div>
            <Krembo />
            <button onClick={onClick}>Change locale (de - ja)</button>
        </div>
    );
};

export default Index;