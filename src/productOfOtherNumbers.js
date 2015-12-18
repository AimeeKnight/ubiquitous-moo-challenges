var otherNumbersProduct = {};

otherNumbersProduct.calculate = function(list) {
    var arrayWithoutNumberAt = function(index) {
        var newList = list.slice(0);
        delete newList[index];

        return newList.filter(function(e) {
            return e !== undefined;
        })
    };

    return list.map(function (n, idx) {
        return arrayWithoutNumberAt(idx).reduce(function(product, val) {
            return product * val;
        });
    });
};

