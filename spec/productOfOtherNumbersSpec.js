describe("Finding products of other numbers", function() {
    it("should find the product for all numbers expect the current index", function() {
        var result = otherNumbersProduct.calculate([1, 7, 3, 4]);
        expect(result).toEqual([84, 12, 28, 21]);
    });

    it("should find the product for all numbers expect the current index", function() {
        var result = otherNumbersProduct.calculate([1, 0, 3, 4]);
        expect(result).toEqual([0, 12, 0, 0]);
    });
});