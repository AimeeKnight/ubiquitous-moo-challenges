describe("Sorted Search", function() {
  it("finds the given number in an array of sorted numbers", function() {
    var list_of_ints = [2,3,4,5,6,7]
    , actual = Find.search(list_of_ints, 4);

    expect(actual).toEqual(2);
  });
});
