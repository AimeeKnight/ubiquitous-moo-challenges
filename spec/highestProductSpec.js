describe("Finding highest products", function() {
  it("calculates highest product from a list of three integers", function() {
    var list_of_ints = [2,3,4];

    var actual = HighestProduct.calculate(list_of_ints);

    expect(actual).toEqual(24);
  });

  it("calculates highest product from a list of 4 sorted integers", function(){
    var list_of_ints = [2,3,4,5];

    var actual = HighestProduct.calculate(list_of_ints);

    expect(actual).toEqual(60);
  });

  it("calculates highest product from a list of 4 unsorted integers", function(){
    var list_of_ints = [6,2,1,4];

    var actual = HighestProduct.calculate(list_of_ints);

    expect(actual).toEqual(48);
  });

  it("calculates highest product from a list of 4 unsorted integers with negative numbers", function() {
    var list_of_ints = [-6,-2,1,4];

    var actual = HighestProduct.calculate(list_of_ints);

    expect(actual).toEqual(48);
  });
});
