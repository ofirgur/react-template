import { useSelector } from 'react-redux';

import { getUserLocale } from '../slice';
import l10n from '../../l10n';

const useNumberFormat = number => {
    const currency = useSelector(getUserLocale);

    return l10n.numberFormat(number);
};

export default useNumberFormat;