export const numberFormat = options => locale => number => {
    return new Intl.NumberFormat(locale, options).format(number);
};

export const dateFormat = options => locale => date => {
    if(!date || date === '') return;
    
    return new Intl.DateTimeFormat(locale, options).format(new Date(date));
};

// convert from server
export const isoStringToDate = isoString => {
    return new Date(isoString);
};

// send to server
export const dateToISOString = date => {
    return date.toISOString();
};
