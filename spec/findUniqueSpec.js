describe("Utils", function() {
    it("should find the unique number", function() {
        var list_of_ints = [2, 3, 4, 2, 4]
        , actual = Utils.findUnique(list_of_ints);

        expect(actual).toEqual(3);
    });
});