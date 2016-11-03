describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles an array with one element', function(){
    expect( bubbleSort([5]) ).toEqual( [5] );
  });

  it('handles an array with multiple element', function(){
    expect( bubbleSort([5, 3, 9, 1, 18]) ).toEqual( [1, 3, 5, 9, 18] );
  });
});
