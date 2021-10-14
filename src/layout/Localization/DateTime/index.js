import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { dateToISOString, isoStringToDate } from '../../../l10n';
import { useDateFormat } from '../../../l10n/hooks';
import { getUserDate } from '../../../user/slice'; 

const Home = () => {
    const isoString = useSelector(getUserDate);
    const date = isoStringToDate(isoString);
    const d = useDateFormat({ dateStyle: 'full', timeStyle: 'long' });

    return (
        <div>
            <h2>Date & Time</h2>
            <div>Date formate base on locale, ISO timezoe, GMT</div>
            <br />
            <h4>User date, iso string</h4>
            <h4>{isoString}</h4>
            <h4>useDateFormat base on locale</h4>
            <h4>{d(isoString)}</h4>
        </div>
    );
};

export default Home;