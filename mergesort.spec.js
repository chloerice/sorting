describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect( split([1,2]) ).toEqual( [[1],[2]] );
  });

  it('is able to split arrays until each array has a length of 1', function() {
    expect( split([3, 6, 2, 7, 9, 1, 8, 5])).toEqual([[3, 6, 2, 7], [9, 1, 8, 5]])
  });

  it('is able to split arrays with an odd length', function() {
    expect( split([3, 6, 2, 7, 9, 1, 8, 5, 4])).toEqual([[3, 6, 2, 7], [9, 1, 8, 5, 4]])
  });
});

describe('Merge', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect(merge([1, 4, 6, 8], [3, 5, 7, 9])).toEqual([1, 3, 4, 5, 6, 7, 8, 9])
  });
});

describe('Merge Sort', function(){
  it('should sort an unsorted array and return a sorted array', function(){
    expect(mergeSort([3, 6, 2, 7, 9, 1, 8, 5, 4])).toEqual([1, 3, 4, 5, 6, 7, 8, 9])
  });
});
