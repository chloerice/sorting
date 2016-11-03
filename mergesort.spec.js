describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect( split([1,2]) ).toEqual( [[1],[2]] );
  });

  it('is able to split arrays until each array has a length of 1', function() {
    expect( split([3, 6, 2, 7, 9, 1, 8, 5])).toEqual([[3], [6], [2], [7], [9], [1], [8], [5]])
  });
});
