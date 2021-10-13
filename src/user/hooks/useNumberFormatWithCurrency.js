import { useSelector } from 'react-redux';

import { getUserCurrency } from '../slice';
import l10n from '../../l10n';

const useNumberFormatWithCurrency = number => {
    const locale = useSelector(getUserCurrency);

    return l10n.numberFormatWithCurrency(number);
}

export default useNumberFormatWithCurrency;