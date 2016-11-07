'use strict';

// This function will be called with 3 arguments set to
// 2, 10, and 1000000 respectively

const reverseStr = function (num) {
  return num.toString().split('').reverse().join('');
};

const doubleBasePalindromeSum = function (base1, base2, upperLimit) {
  let numArray = [];
  for (let i = 1; i < upperLimit; i++) {
    // find the reverse of i, decimal of i and reverse decimal of i
    let i_b1 = i.toString(base1);
    let i_b1_rev = reverseStr(i_b1);
    let i_b2 = i.toString(base2);
    let i_b2_rev = reverseStr(i_b2);
    // if i and i_dec is the same forwards and backwards add it to array
    if ((i_b1 === i_b1_rev) && (i_b2 === i_b2_rev)) {
      numArray.push(i);
    }
  }
  return numArray.reduce( (prev, curr) => prev + curr );
};

module.exports = {
  doubleBasePalindromeSum,
};
