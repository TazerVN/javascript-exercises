const add = function(x, y) {
  return x + y
};

const subtract = function(x, y) {
	return x - y
};

const sum = function([...num]) {
  const number = [...num]
  return number.reduce((a,b) => a + b, 0)
};

const multiply = function([...num]) {
  const number = [...num]
  return number.reduce((a,b) => a * b, 1)

};

const power = function(x, y) {
  return Math.pow(x, y)
};

const factorial = function(a) {
  const number = []
  for(i = 1; i - 1 < a; i++){
    number.push(i)
  }
  return number.reduce((x, y) => x*y, 1)

}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
