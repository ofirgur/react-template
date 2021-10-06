import React from 'react';
import { useDispatch } from 'react-redux';

import { setUserLocale } from '../../app/slice';
import i18n from '../../i18n';
const t = i18n.translateFrom('app');

const Index = () => {
    const dispatch = useDispatch();
    console.log('translate with locale: ', i18n.getLocale());
    
    const onClick = () => {
        dispatch(setUserLocale('fr'));
        console.log(`dispatch(setUserLocale('fr')) ', locale)`);
    };

    return (
        <div>
            <p>{t('HelloWorld.Text')}</p>
            <button onClick={onClick}>Change locale</button>
        </div>
    );
};

export default Index;