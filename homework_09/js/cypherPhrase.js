cypherPhrase = (obj, str) => {
    str = str.split('');
    return getTransformedArray(str, (el) => obj[el] || el).join('');
};
