const fibonacci = function(index) {

  let prv = 0;
  let cur = 1;
  let next;

  let count;

  if (typeof index !== 'number' ) {
    count = parseInt(index);
  } else {
    count = index;
  };

  if ( count < 0 ) return 'OOPS';
  if ( count == 0 ) return 0 ;


  for (let i = 0; i < (count - 1); i++) {

    next = prv + cur;
    prv = cur;
    cur = next;
    
  };

  return cur;

};



// Do not edit below this line
module.exports = fibonacci;
