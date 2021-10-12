import { useSelector } from 'react-redux';

import { getUserLocale } from '../app/slice';
import l10n from '../l10n';

const useFormat = number => {
    const locale = useSelector(getUserLocale);

    return l10n.numberFormat(number);
}

export default useFormat;