const add = function(x,y) {
  return x+y;
	
};

const subtract = function(x,y) {
  return x-y;
	
};

const sum = function(arr) {
  let res = 0;
  for (const item of arr){
    res += item;
  }
  return res;
};

const multiply = function(arr) {
  let res = 1;

  for (const item of arr)
  {
    res *= item;
  }

  return res;



};

const power = function(x,y) {
	return x**y;
};

const factorial = function(x) {
  if (x === 0 || x === 1) {
    return 1;
  } 
  else if (x < 0) {
    return "Factorial is not defined for negative numbers.";
  }
  // Recursive step: x * factorial(x - 1)
  else {
    return x * factorial(x - 1);
  }
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
