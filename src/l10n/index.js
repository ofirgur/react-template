export const numberFormat = options => locale => number => {
    return new Intl.NumberFormat(locale, options).format(number);
};
