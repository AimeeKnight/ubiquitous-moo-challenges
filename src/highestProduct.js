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

  var isNegative = function(n) {
    return n < 0;
  }

  var haveTwoNegativeNumbers = function(numbers) {
    return numbers.filter(isNegative).length >= 2;
  }

  var largestThreeNumbers = function(numbers) {
    return numbers.slice(-3);
  }

  if (haveTwoNegativeNumbers(listOfInts)) {
    var length = listOfInts.length;
    var productOfLargestNegatives = listOfInts[0] * listOfInts[1];
    var largestInteger = listOfInts[length - 1];
    var productofLargestPositives = listOfInts[length - 2] *largestInteger ;

    if (productOfLargestNegatives > productofLargestPositives) {
      return productOfLargestNegatives * largestInteger;
    } else {
      return multiply(largestThreeNumbers(listOfInts));
    }
  } else {
    return multiply(largestThreeNumbers(listOfInts));
  }
};






























