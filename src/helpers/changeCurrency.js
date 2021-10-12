import l10n from '../l10n';
import user from '../user';

export default currency => {
    l10n.setCurrency(currency);
    user.setCurrency(currency);
};