import l10n from '../l10n';
import user from '../user';
import { setUserCurrency } from '../user/slice';

export default (dispatch, currency) => {
    dispatch(setUserCurrency(currency));

    l10n.setCurrency(currency);
    user.setCurrency(currency);
};