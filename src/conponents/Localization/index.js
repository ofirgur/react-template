import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setUserLocale, setUserCurrency } from '../../user/slice';

import Numbers from './Numbers';
import DateTime from './DateTime';

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
            <Numbers />
            <hr />
            <DateTime />
            <hr />
            <button 
                onClick={onClick}
                style={{
                    width: '100%',
                    color: 'white',
                    height: 100,
                    background: 'blue',
                    fontSize: 20,
                    cursor: 'pointer'
                }}
            >
                CHANGE LOCALE (de - ja)
            </button>
        </div>
    );
};

export default Index;