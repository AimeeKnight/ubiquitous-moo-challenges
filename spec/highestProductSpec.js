describe("Finding highest products", function() {
  it("calculates highest product from a list of three integers", function() {
    var list_of_ints = [2,3,4];

    var actual = HighestProduct.calculate(list_of_ints);

    expect(actual).toEqual(24);
  });

  it("calculates highest product from a list of three integers with one negative", function() {
    var list_of_ints = [-2,3,4];

    var actual = HighestProduct.calculate(list_of_ints);

    expect(actual).toEqual(-24);
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

  it("calculates highest product from a list of 4 unsorted integers with 1 negative numbers", function() {
    var list_of_ints = [6,-2,1,4];

    var actual = HighestProduct.calculate(list_of_ints);

    expect(actual).toEqual(24);
  });

  it("calculates highest product from a list of 4 unsorted integers where product of two largest negative numbers is > product of two largest positive integers", function() {
    var list_of_ints = [-6,2,1,-4];

    var actual = HighestProduct.calculate(list_of_ints);

    expect(actual).toEqual(48);
  });

  it("calculates highest product from a list of 4 unsorted integers where product of two largest positive numbers is > product of two largest nagative integers", function() {
    var list_of_ints = [9, 8, -7, 0];

    var actual = HighestProduct.calculate(list_of_ints);

    expect(actual).toEqual(0);
  });

  it("calculates highest product from a list of 8 unsorted integers", function() {
    var list_of_ints = [-2, -10, -7, -5, 3, 4, 2, 1];

    var actual = HighestProduct.calculate(list_of_ints);

    expect(actual).toEqual(280);
  });

});
