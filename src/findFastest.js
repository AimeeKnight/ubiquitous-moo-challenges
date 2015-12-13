var Find = {};

/* Returns either the index of the location in the array,
  or -1 if the array did not contain the targetValue */

Find.search = function(array, targetValue) {
  var min = 0
    , max = array.length - 1
    , guess;

  while(min <= max) {
    guess = Math.floor((max + min) / 2);

    if (array[guess] === targetValue) {
      return guess;
    }
    else if (array[guess] < targetValue) {
      min = guess + 1;
    } else {
      max = guess - 1;
    }
  }
  return -1;
};
