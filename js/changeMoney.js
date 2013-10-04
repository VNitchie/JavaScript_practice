/*
 * Given a dollar amount, computes the change required
 * to tender to a customer.
 * Returned value looks like:
 * { 'dollars': 1, quarters, 2: etc }
 */
var makeChange = function(amount) {
  var change = {};
  
  var denominations = [
    { name: 'hundreds', value: 10000 },
    { name: 'fifties', value: 5000 },
    { name: 'twenties', value: 2000 },
    { name: 'tens', value: 1000 },
    { name: 'fives', value: 500 },
    { name: 'ones', value: 100 },
    { name: 'quarters', value: 25 },
    { name: 'dimes', value: 10 },
    { name: 'nickels', value: 5 },
    { name: 'pennies', value: 1 }
  ];
  
  // convert to pennies to make the math easier
  amount *= 100;
  for(var index = 0; index < denominations.length; index++) {
    var current = denominations[index];
    if(amount >= current.value) {
      var number = parseInt(amount / current.value);
      amount -= number * current.value;
      change[current.name] = number;
    }
  }
  
  return change;
}

document.write('<p>7.23 -> ' + JSON.stringify(makeChange(7.23)) + '</p>');
document.write('<p>1234.56 -> ' + JSON.stringify(makeChange(1234.56)) + '</p>');
