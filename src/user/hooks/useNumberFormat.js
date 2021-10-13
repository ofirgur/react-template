import { useSelector } from 'react-redux';

import { getUserLocale } from '../slice';
import user from '../../user';

const useNumberFormat = number => {
    const currency = useSelector(getUserLocale);

    return user.numberFormat(number);
};

export default useNumberFormat;