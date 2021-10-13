import { useSelector } from 'react-redux';

import { getUserCurrency } from '../user/slice';
import l10n from '../l10n';

const useFormat = number => {
    const currency = useSelector(getUserCurrency);

    return l10n.numberFormat(number);
}

export default useFormat;