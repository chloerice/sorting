function split(wholeArray) {

	var firstHalf = wholeArray.slice(0,wholeArray.length/2);
	var secondHalf = wholeArray.slice(wholeArray.length/2);

  return [firstHalf, secondHalf];
}