var HighestProduct = {};

HighestProduct.calculate = function(listOfInts) {
  var ascending = function(a, b) {
    return a - b ;
  };
  listOfInts.sort(ascending);

  var multiply = function(numbers) {
    var product = 1;
      numbers.forEach(function(int) {
        product = product * int;
      });
      return product;
  }

  var haveThreePositiveNumbers = function(numbers) {
    return numbers.filter(function(n) { return n >= 0}).length >= 3;
  }

  var isNegative = function(n) {
    return n < 0;
  }

  var haveTwoNegativeNumbers = function(numbers) {
    return numbers.filter(isNegative).length >= 2;
  }

  var smallestNegative = function(numbers) {
    var sortedNegatives = numbers.filter(isNegative);
    return sortedNegatives[sortedNegatives.length - 1];
  }

  var numbersToMultiply = [];
  if (haveThreePositiveNumbers(listOfInts)) {
    numbersToMultiply = listOfInts.slice(-3);
  } else {
    if (haveTwoNegativeNumbers(listOfInts)) {
      numbersToMultiply.push(listOfInts[0]);
      numbersToMultiply.push(listOfInts[1]);
      numbersToMultiply.push(listOfInts[listOfInts.length - 1])
    } else {
      numbersToMultiply.push(listOfInts[listOfInts.length - 1]);
      numbersToMultiply.push(listOfInts[listOfInts.length - 2]);
      numbersToMultiply.push(smallestNegative(listOfInts))
    }
  }

  return multiply(numbersToMultiply);
};
