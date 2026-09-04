const add = function(a, b) {
  return a + b;	
};

const subtract = function(a, b) {
  return a - b;	
};

const sum = function(num) {
  const sumAll = num.reduce( (total, cur) => {
    return total + cur;
  }, 0 );
  return sumAll;
};

const multiply = function(num) {
  const mul = num.reduce( (total, cur) => {
    return total * cur;
  }, 1);
  return mul;
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(num) {
  const fact = Array.from( {length: num}, (_, i) => i + 1 );
  return fact.reduce( (fac, cur) => fac * cur, 1 );
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
