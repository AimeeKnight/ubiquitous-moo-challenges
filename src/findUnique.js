var Utils = {};

Utils.findUnique = function (numbers) {
    var dups = []
    , ascending = function(a, b) {
        return a - b ;
    };

    numbers.sort(ascending);

    dups = numbers.filter(function(num, idx){
        return num === numbers[idx + 1];
    });

    return numbers.filter(function(number){
       return !dups.includes(number);
    })[0];
};