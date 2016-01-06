describe("StringUtils", function() {
    it("should swap two elements", function() {
        var ints = [2, 8, 7, 3, 4];

        StringUtils.swap(ints, 0, 1);
        expect(ints).toEqual([8, 2, 7, 3, 4]);
    });

    it("should sort all elements", function() {
        var ints = '28734';

        var result = StringUtils.sort(ints);
        expect(result).toEqual('23478');
    });

    it("should reverse a string in place", function() {
        var word = 'aimee';

        var result = StringUtils.reverse(word);
        expect(result).toEqual('eemia');
    });
});