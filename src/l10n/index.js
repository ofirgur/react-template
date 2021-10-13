export const numberFormat = options => locale => number => {
    return new Intl.NumberFormat(locale).format(number, options);
};
