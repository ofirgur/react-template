import React, { useState } from 'react';

import user from '../../user';

import Krembo from './Krembo';

const Index = () => {
    const [locale, setLocale] = useState({ l: 'ja-JP', c: 'JPY'}); 
    
    const onClick = () => {
        const l = locale.l === 'ja-JP' ? 'de-DE' : 'ja-JP';
        const c = locale.l === 'ja-JP' ? 'EUR' : 'JPY'
        
        setLocale({ l , c });
        user.setLocale(l);
        user.setCurrency(c);
    };

    return (
        <div>
            <Krembo />
            <button onClick={onClick}>Change locale (de - ja)</button>
        </div>
    );
};

export default Index;