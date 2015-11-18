var HighestProduct = {};

HighestProduct.calculate = function(listOfInts) {
  var absoluteValues = listOfInts.map(function(n) { 
    return Math.abs(n)
  });
  var descending = function(a, b) {
    return b - a;
  };
  absoluteValues.sort(descending);

  var largestThreeNumbers = absoluteValues.slice(0, 3);
  var product = 1;
  largestThreeNumbers.forEach(function(int) {
    product = product * int;
  });

  return product;
};
