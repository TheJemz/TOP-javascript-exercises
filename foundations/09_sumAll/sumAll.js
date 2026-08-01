const sumAll = function(a, b) {
    
    if (typeof a !== 'number' || !Number.isInteger(a) || a < 0 || typeof b !== 'number' || !Number.isInteger(b) || b < 0) {
        return 'ERROR';
    } else {
        let min = Math.min (a, b);
        let max = Math.max (a, b);
        let sum = 0;

        for (let i = min; i <= max; i++) {
            sum = sum + i;
        }
        return sum;
    }

};

// Do not edit below this line
module.exports = sumAll;
