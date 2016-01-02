// https://en.wikipedia.org/wiki/Insertion_sort
// https://www.interviewcake.com/question/ruby/reverse-string-in-place

var StringUtils = {};

StringUtils.sort = function (nums) {
    const digits = nums.split('').map(function(num) {
        return parseInt(num);
    });

    for (var i = 0; i < digits.length; i++) {
        var j = i;
        while (j > 0 && digits[j - 1] > digits[j]) {
            StringUtils.swap(digits, j, j - 1);
            j = j - 1;
        }
    }
    return digits.join('');
};

StringUtils.reverse = function (word) {
    const letters = word.split('');
    var start = 0;
    var end = letters.length - 1;

    while (start < end) {
        StringUtils.swap(letters, start, end);
        start = start + 1;
        end = end - 1;
    }
    return letters.join('');
};

StringUtils.swap = function (collection, index1, index2) {
    var tmp = collection[index1];
    collection[index1] = collection[index2];
    collection[index2] = tmp;
};

