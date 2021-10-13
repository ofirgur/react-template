import { useSelector } from 'react-redux';

import { getUserCurrency } from '../slice';
import user from '../../user';

const useNumberFormatWithCurrency = number => {
    const locale = useSelector(getUserCurrency);

    return user.numberFormatWithCurrency(number);
}

export default useNumberFormatWithCurrency;