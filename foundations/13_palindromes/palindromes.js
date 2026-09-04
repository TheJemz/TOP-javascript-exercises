const palindromes = function (phrase) {
    const clean = phrase.toLowerCase().replace(/[^a-z0-9]/g, '')
    const reversed = clean.split('').reverse().join('');
    return clean === reversed;
};

// Do not edit below this line
module.exports = palindromes;
